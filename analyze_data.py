from __future__ import division

import json

import pandas
import requests
import enum

from markupsafe import Markup

import constant


def url():
    return 'https://ax.lolalytics.com/mega/'


def params_generate(side, patch, lane, cid, tier, region):
    params = []
    if side == 'enemy':
        params.append(['ep', 'champion'])
    elif side == 'team':
        params.append(['ep', 'champion2'])
    params.append(['p', 'd'])
    params.append(['v', '1'])
    params.append(['patch', patch])
    params.append(['cid', str(cid)])
    params.append(['lane', lane])
    params.append(['tier', tier])
    params.append(['queue', '420'])
    params.append(['region', region])
    print(params)
    return params


def get_counters(patch, lane, cid, tier, region):
    response = requests.get(url(), params=params_generate('enemy', patch, lane, cid, tier, region))
    enemy_counters = {}
    # 每个位置是一个List<List<>> 里面的list存四个元素  按照顺序分别是  cid，对战场数，获胜场数，该英雄的总胜率
    enemy_counters['top'] = json.loads(response.content).get('enemy_top')
    enemy_counters['jungle'] = json.loads(response.content).get('enemy_jungle')
    enemy_counters['middle'] = json.loads(response.content).get('enemy_middle')
    enemy_counters['bottom'] = json.loads(response.content).get('enemy_bottom')
    enemy_counters['support'] = json.loads(response.content).get('enemy_support')
    response = requests.get(url(), params=params_generate('team', patch, lane, cid, tier, region))
    team_counters = {}
    team_counters['top'] = json.loads(response.content).get('team_top', None)
    team_counters['jungle'] = json.loads(response.content).get('team_jungle', None)
    team_counters['middle'] = json.loads(response.content).get('team_middle', None)
    team_counters['bottom'] = json.loads(response.content).get('team_bottom', None)
    team_counters['support'] = json.loads(response.content).get('team_support', None)
    print(enemy_counters)
    print(team_counters)
    return enemy_counters, team_counters


def analyze_chosen_data(patch, lane, cid_to_chose, tier, region, enemy_chosen_dic, team_chosen_dic):
    enemy_counters, team_counters = get_counters(patch, lane, cid_to_chose, tier, region)
    # 已选位置的英雄cid
    enemy_top = constant.champions_cid_dic.get(enemy_chosen_dic.get('top', None),None)
    enemy_jungle = constant.champions_cid_dic.get(enemy_chosen_dic.get('jungle', None),None)
    enemy_middle = constant.champions_cid_dic.get(enemy_chosen_dic.get('middle', None),None)
    enemy_bottom = constant.champions_cid_dic.get(enemy_chosen_dic.get('bottom', None),None)
    enemy_support = constant.champions_cid_dic.get(enemy_chosen_dic.get('support', None),None)
    team_top = constant.champions_cid_dic.get(team_chosen_dic.get('top', None),None)
    team_jungle = constant.champions_cid_dic.get(team_chosen_dic.get('jungle', None),None)
    team_middle = constant.champions_cid_dic.get(team_chosen_dic.get('middle', None),None)
    team_bottom = constant.champions_cid_dic.get(team_chosen_dic.get('bottom', None),None)
    team_support = constant.champions_cid_dic.get(team_chosen_dic.get('support', None),None)
    # 填入表格
    result_table = []
    find_and_fill('enemy', 'top',enemy_top, enemy_counters['top'], result_table)
    find_and_fill('enemy', 'jungle',enemy_jungle, enemy_counters['jungle'], result_table)
    find_and_fill('enemy', 'middle',enemy_middle, enemy_counters['middle'], result_table)
    find_and_fill('enemy', 'bottom',enemy_bottom, enemy_counters['bottom'], result_table)
    find_and_fill('enemy', 'support',enemy_support, enemy_counters['support'], result_table)
    find_and_fill('team', 'top', team_top, team_counters['top'], result_table)
    find_and_fill('team', 'jungle', team_jungle, team_counters['jungle'], result_table)
    find_and_fill('team', 'middle', team_middle, team_counters['middle'], result_table)
    find_and_fill('team', 'bottom', team_bottom, team_counters['bottom'], result_table)
    find_and_fill('team', 'support', team_support, team_counters['support'], result_table)
    total_rate=0;
    believable=0
    for item in result_table:
        total_rate+=item[3]
        believable+=item[4]
    total_rate=total_rate/len(result_table)
    believable=believable/len(result_table)
    result_table.append(['-','-','总和',total_rate,believable,'-'])
    html = pandas.DataFrame(result_table, columns=['阵营','位置', '英雄', '胜率', '可信度', '英雄自身胜率']).to_html()
    print(html)
    # html= '<!DOCTYPE html><html><head><title>My Table</title></head><body>' + html +'</body></html>'
    return html


def find_and_fill(side, lane,cid, counter_dic, result_table):
    if not cid:
        return
    if cid:
        if counter_dic:##如果是本位置  team_counters_dic将为空
            for item in counter_dic:
                if item[0] == cid:
                    result_table.append([side,lane, constant.cid_champions_dic[cid], item[2] / item[1], item[1], item[3]])


# print(get_counters('13.16', constant.Lane.TOP.value, '166', constant.Tiers.D2_PLUS.value, constant.Region.ALL.value))
if __name__ == "__main__":
    enemy_chosen_dic = {}
    enemy_chosen_dic['top'] = 266
    team_chosen_dic = {}
    analyze_chosen_data('13.16', constant.Lane.TOP.value, '166', constant.Tiers.D2_PLUS.value,
                        constant.Region.ALL.value, enemy_chosen_dic, team_chosen_dic)
