import os

import flask
import requests
from flask import Flask, json
from flask import render_template
from flask import request
from pandas.io import common

import constant
from analyze_data import analyze_chosen_data
from champion_pool_analyze import champion_pool_analyze_html

app = Flask("WiseChooser")
port=1268

@app.route('/')
def hello_world():
    return flask.render_template('test.html'
                                 )

@app.route('/analyze_data', methods=["GET"])
def analyze_data():
    return flask.render_template('analyze_data.html',
    stylesheet = read(os.path.join('static/default.css')),
                                 )
def read(path):
    if not os.path.exists(path):
        return None
    with open(path, "r", encoding='utf-8') as path_open:
        return path_open.read()
@app.route('/do_analyze_data', methods=["GET"])
def do_analyze_data():
    params = request.args
    print(request)
    print(params)
    enemy_top = params.get('enemy_top', None)
    enemy_jungle = params.get('enemy_jungle', None)
    enemy_middle = params.get('enemy_middle', None)
    enemy_bottom = params.get('enemy_bottom', None)
    enemy_support = params.get('enemy_support', None)
    team_top = params.get('team_top', None)
    team_jungle = params.get('team_jungle', None)
    team_middle = params.get('team_middle', None)
    team_bottom = params.get('team_bottom', None)
    team_support = params.get('team_support', None)
    if not enemy_top and not enemy_jungle and not enemy_middle and not enemy_bottom and not enemy_support and not team_top and not team_jungle and not team_middle and not team_bottom and not team_support:
        return {'html': "<h3 style='color:#DC143C'>请在上方输入框选择一个或多个敌方(友方)英雄再分析本局胜率</h3>"}
    enemy_chosen_dic = {'top': enemy_top, 'jungle': enemy_jungle, 'middle': enemy_middle, 'bottom': enemy_bottom,
                        'support': enemy_support}
    team_chosen_dic = {'top': team_top, 'jungle': team_jungle, 'middle': team_middle, 'bottom': team_bottom,
                       'support': team_support}
    patch=params.get('patch', None)
    print(patch)
    try:
        lane = params['lane']
        cid_to_chose = constant.champions_cid_dic[params['champion']]
    except BaseException as e:
        rt = {'html': '所选英雄错误，请正确输入您想选的英雄（从下拉框选择） \n '+str(e)}
        print(rt)
        return rt
    tier = params['tier']
    region = params['region']
    return analyze_chosen_data(patch,lane,cid_to_chose,tier,region, enemy_chosen_dic, team_chosen_dic)

@app.route('/champion_pool_analyze', methods=["POST"])
def champion_pool_analyze():
    print(request.data)
    params = json.loads(request.data)
    print(request)
    print(params)
    enemy_top = params.get('enemy_top', None)
    enemy_jungle = params.get('enemy_jungle', None)
    enemy_middle = params.get('enemy_middle', None)
    enemy_bottom = params.get('enemy_bottom', None)
    enemy_support = params.get('enemy_support', None)
    team_top = params.get('team_top', None)
    team_jungle = params.get('team_jungle', None)
    team_middle = params.get('team_middle', None)
    team_bottom = params.get('team_bottom', None)
    team_support = params.get('team_support', None)
    if not enemy_top and not enemy_jungle and not enemy_middle and not enemy_bottom and not enemy_support and not team_top and not team_jungle and not team_middle and not team_bottom and not team_support:
        return "<h3 style='color:#DC143C'>请在上方输入框选择一个或多个敌方(友方)英雄再分析英雄池</h3>"
    enemy_chosen_dic = {'top': enemy_top, 'jungle': enemy_jungle, 'middle': enemy_middle, 'bottom': enemy_bottom,
                        'support': enemy_support}
    team_chosen_dic = {'top': team_top, 'jungle': team_jungle, 'middle': team_middle, 'bottom': team_bottom,
                       'support': team_support}
    patch=params.get('patch', None)
    champion_pool = []
    try:
        champion_pool=params.get('champion_pool')
        for item in champion_pool:
            item['champion']=constant.champions_cid_dic[item.get('champion')]
    except BaseException as e:
        rt = '所选英雄错误，请正确输入您想选的英雄（从下拉框选择） \n '+str(e)
        print(rt)
        return rt
    tier = params['tier']
    region = params['region']
    return champion_pool_analyze_html(patch, champion_pool, tier, region, enemy_chosen_dic, team_chosen_dic)

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=port,debug=True)