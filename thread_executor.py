import threading
from concurrent.futures import ThreadPoolExecutor, as_completed

import pandas

import constant
from analyze_data import analyze_chosen_data, get_counters, find_and_fill

# 创建全局的线程池对象
global_thread_pool = ThreadPoolExecutor(max_workers=30)


def do_something(patch, lane, cid_to_chose, tier, region, enemy_chosen_dic, team_chosen_dic, res_list, lock):
    # 在任何地方使用全局的线程池对象
    global_thread_pool.submit(fill_list, patch, lane, cid_to_chose, tier, region, enemy_chosen_dic, team_chosen_dic,
                              res_list, lock)


def fill_list(patch, lane, cid_to_chose, tier, region, enemy_chosen_dic, team_chosen_dic, res_list, lock):
    lock.locked()
    print('enemy_chosen_dic')
    print(enemy_chosen_dic)
    res_list.append(
        analyze_muti_chosen_data_to_dic(patch, lane, cid_to_chose, tier, region, enemy_chosen_dic, team_chosen_dic))
    lock.release()


def analyze_muti_chosen_data_to_dic(patch, lane, cid_to_chose, tier, region, enemy_chosen_dic, team_chosen_dic):
    enemy_counters, team_counters, yourself_win_rate, rank, rank_total, champion_tier = get_counters(patch, lane,
                                                                                                     cid_to_chose, tier,
                                                                                                     region)
    # 已选位置的英雄cid
    enemy_top = constant.champions_cid_dic.get(enemy_chosen_dic.get('top', None), None)
    enemy_jungle = constant.champions_cid_dic.get(enemy_chosen_dic.get('jungle', None), None)
    enemy_middle = constant.champions_cid_dic.get(enemy_chosen_dic.get('middle', None), None)
    enemy_bottom = constant.champions_cid_dic.get(enemy_chosen_dic.get('bottom', None), None)
    enemy_support = constant.champions_cid_dic.get(enemy_chosen_dic.get('support', None), None)
    team_top = constant.champions_cid_dic.get(team_chosen_dic.get('top', None), None)
    team_jungle = constant.champions_cid_dic.get(team_chosen_dic.get('jungle', None), None)
    team_middle = constant.champions_cid_dic.get(team_chosen_dic.get('middle', None), None)
    team_bottom = constant.champions_cid_dic.get(team_chosen_dic.get('bottom', None), None)
    team_support = constant.champions_cid_dic.get(team_chosen_dic.get('support', None), None)
    # 填入表格
    result_table = []
    find_and_fill('enemy', 'top', enemy_top, enemy_counters['top'], result_table)
    find_and_fill('enemy', 'jungle', enemy_jungle, enemy_counters['jungle'], result_table)
    find_and_fill('enemy', 'middle', enemy_middle, enemy_counters['middle'], result_table)
    find_and_fill('enemy', 'bottom', enemy_bottom, enemy_counters['bottom'], result_table)
    find_and_fill('enemy', 'support', enemy_support, enemy_counters['support'], result_table)
    find_and_fill('team', 'top', team_top, team_counters['top'], result_table)
    find_and_fill('team', 'jungle', team_jungle, team_counters['jungle'], result_table)
    find_and_fill('team', 'middle', team_middle, team_counters['middle'], result_table)
    find_and_fill('team', 'bottom', team_bottom, team_counters['bottom'], result_table)
    find_and_fill('team', 'support', team_support, team_counters['support'], result_table)
    total_rate = 0
    believable = 0
    for item in result_table:
        total_rate += item[3]
        believable += item[4]
        if item[0] == 'enemy':
            item.append("{:.2f}%".format(100 * item[3] - yourself_win_rate))
        else:
            item.append("{:.2f}%".format(100 * item[3] - yourself_win_rate))

        item[3] = "{:.2f}%".format(100 * item[3])
    total_rate = total_rate / len(result_table)
    believable = believable / len(result_table)
    print('total_rate')
    print(constant.cid_champions_dic[cid_to_chose])
    print( "{:.2f}%".format(
        100 * total_rate))
    print(believable)
    print("{:.2f}%".format(100 * total_rate - yourself_win_rate))

    return [lane, constant.cid_champions_dic[cid_to_chose], "{:.2f}%".format(
        100 * total_rate),"{:.2f}%".format(yourself_win_rate), believable, "{:.2f}%".format(100 * total_rate - yourself_win_rate)]


if __name__ == '__main__':
    result_list=[]
    lock=threading.Lock()
    enemy_chosen_dic={'top': '离群之刺 阿卡丽', 'jungle': '殇之木乃伊 阿木木', 'middle': '九尾妖狐 阿狸 狐狸', 'bottom': '残月之肃 厄斐琉斯', 'support': '仙灵女巫 露露'}
    team_chosen_dic={'support': '血港鬼影 派克'}
    champion_pool = [['top', 266], ['middle', 103]]
    futures = []
    for item in champion_pool:
        print(item[0])
        print(item[1])
        future = global_thread_pool.submit(fill_list, '13.16', item[0], item[1], 'd2_plus', 'all', enemy_chosen_dic,
                                           team_chosen_dic,
                                           result_list, lock)
        futures.append(future)
    # 等待所有任务完成
    for future in as_completed(futures):
        pass
    print('result_list')
    print(result_list)
    html=pandas.DataFrame(result_list, columns=['位置', '英雄', '本局胜率','英雄胜率', '可信度','差值']).to_html()

