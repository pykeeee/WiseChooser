import flask
import requests
from flask import Flask
from flask import render_template
from flask import request
import constant
from analyze_data import analyze_chosen_data

app = Flask("WiseChooser")
port=1268

@app.route('/')
def hello_world():
    return flask.render_template('test.html'
                                 )

@app.route('/analyze_data', methods=["GET"])
def analyze_data():
    return flask.render_template('analyze_data.html'
                                 )

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
    enemy_chosen_dic = {'top': enemy_top, 'jungle': enemy_jungle, 'middle': enemy_middle, 'bottom': enemy_bottom,
                        'support': enemy_support}
    team_chosen_dic = {'top': team_top, 'jungle': team_jungle, 'middle': team_middle, 'bottom': team_bottom,
                       'support': team_support}
    patch=params.get('patch', None)
    print(patch)
    lane = params['lane']
    cid_to_chose = constant.champions_cid_dic[params['champion']]
    tier = params['tier']
    region = params['region']
    return analyze_chosen_data(patch,lane,cid_to_chose,tier,region, enemy_chosen_dic, team_chosen_dic)


if __name__ == '__main__':
    app.run(host="0.0.0.0",port=port,debug=True)