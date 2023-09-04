import threading
from concurrent.futures import as_completed

import pandas

import constant
from thread_executor import global_thread_pool, fill_list


def champion_pool_analyze(patch, champion_pool, tier, region, enemy_chosen_dic, team_chosen_dic):
    result_list = []
    lock = threading.Lock()
    champion_pool=['top','暗裔剑魔 亚托克斯',['mid','九尾妖狐 阿狸 狐狸']]
    futures=[]
    for item in champion_pool:
        print(item[0])
        print(item[1])
        future = global_thread_pool.submit(fill_list, patch, item[0], item[1], tier, region, enemy_chosen_dic,
                                           team_chosen_dic,
                                           result_list, lock)
        futures.append(future)
    # 等待所有任务完成
    for future in as_completed(futures):
        pass
    print('result_list')
    print(result_list)
    html = pandas.DataFrame(result_list, columns=['位置', '英雄', '本局胜率', '英雄胜率', '可信度', '差值']).to_html()
    return html

if __name__ == '__main__':
    pass