import enum

# 英雄 id 字典
champions_cid_dic = {
    '暗裔剑魔 亚托克斯': 266,
    '九尾妖狐 阿狸 狐狸': 103,
    '离群之刺 阿卡丽': 84,
    '影哨 阿克尚': 166,
    '牛头酋长 阿利斯塔': 12,
    '殇之木乃伊 阿木木': 32,
    '冰晶凤凰 艾尼维亚 冰鸟': 34,
    '黑暗之女 安妮 火女': 1,
    '残月之肃 厄斐琉斯': 523,
    '寒冰射手 艾希': 22,
    '铸星龙王 奥瑞利安索尔': 136,
    '沙漠皇帝 阿兹尔': 268,
    '星界游神 巴德': 432,
    '虚空女皇 卑尔维斯': 200,
    '蒸汽机器人 布里茨': 53,
    '复仇焰魂 布兰德 火男': 63,
    '弗雷尔卓德之心 布隆': 201,
    '皮城女警 凯特琳': 51,
    '青钢影 卡密尔': 164,
    '魔蛇之拥 卡西奥佩娅 蛇女': 69,
    '虚空恐惧 科加斯 大虫子': 31,
    '英勇投弹手 库奇 飞机': 42,
    '诺克萨斯之手 德莱厄斯 诺手': 122,
    '皎月女神 戴安娜': 131,
    '荣耀行刑官 德莱文': 119,
    '祖安狂人 蒙多': 36,
    '时间刺客 艾克': 245,
    '蜘蛛女皇 伊利斯': 60,
    '痛苦之拥 伊芙琳 寡妇': 28,
    '探险家 伊泽瑞尔': 81,
    '远古恐惧 费德提克 稻草人': 9,
    '无双剑姬 菲奥娜': 114,
    '潮汐海灵 菲兹 小鱼人': 105,
    '正义巨像 加里奥': 3,
    '海洋之灾，普朗克 船长': 41,
    '德玛西亚之力 盖伦': 86,
    '迷失之牙 纳尔': 150,
    '酒桶 古拉加斯': 79,
    '法外狂徒 格雷福斯 男枪': 104,
    '灵罗娃娃 格温': 887,
    '战争之影 赫卡里姆 人马': 120,
    '大发明家 黑默丁格 大头': 74,
    '海兽祭司 俄洛伊': 420,
    '刀锋意志 艾瑞莉娅 刀妹': 39,
    '翠神 艾翁': 427,
    '风暴之怒 迦娜 风女': 40,
    '德玛西亚皇子 嘉文四世': 59,
    '武器大师 贾克斯': 24,
    '未来守护者 杰斯': 126,
    '戏命师 烬': 202,
    '暴走萝莉 金克斯': 222,
    '虚空之女 卡莎': 145,
    '复仇之矛 卡莉斯塔 滑板鞋': 429,
    '天启者 卡尔玛': 43,
    '死亡颂唱者 卡尔萨斯 死歌': 30,
    '虚空行者 卡萨丁': 38,
    '不祥之刃 卡特琳娜': 55,
    '正义天使 凯尔': 10,
    '影流之镰 凯隐': 141,
    '狂暴之心 凯南': 85,
    '虚空掠夺者 卡兹克': 121,
    '永猎双子 千珏': 203,
    '暴怒骑士 克烈': 240,
    '深渊巨口 克格莫 大嘴': 96,
    '纳祖芒荣耀 奎桑提 黑叔叔': 897,
    '诡术妖姬 乐芙兰': 7,
    '盲僧 李青': 64,
    '曙光女神 蕾欧娜 日女': 89,
    '含羞蓓蕾 莉莉娅': 876,
    '冰霜女巫 丽桑卓 冰女': 127,
    '圣枪游侠 卢锡安 奥巴马': 236,
    '仙灵女巫 露露': 117,
    '光辉女神 拉克丝': 99,
    '熔岩巨兽 墨菲特 石头人': 54,
    '虚空先知 马尔扎哈 蚂蚱': 90,
    '扭曲树精 茂凯 大树': 57,
    '无极剑圣 易大师': 11,
    '明烛 米利欧': 902,
    '赏金猎人 厄运小姐 女枪': 21,
    '铁铠冥魂 莫德凯撒 铁男': 82,
    '堕落天使 莫甘娜': 25,
    '百裂冥犬 纳亚菲利 狗': 950,
    '唤潮鲛姬 娜美': 267,
    '沙漠死神 内瑟斯 狗头': 75,
    '深海泰坦 诺提勒斯': 111,
    '万花通灵 妮蔻': 518,
    '狂野女猎手 奈德丽 豹女': 76,
    '不羁之悦 尼菈': 895,
    '永恒梦魇 魔腾': 56,
    '雪原双子 努努': 20,
    '狂战士 奥拉夫': 2,
    '发条魔灵 奥利安娜': 61,
    '山隐之焰 奥恩': 516,
    '不屈之枪 潘森': 80,
    '圣锤之毅 波比': 78,
    '血港鬼影 派克': 555,
    '元素女皇 奇亚娜': 246,
    '德玛西亚之翼 奎因': 133,
    '幻翎 洛': 497,
    '披甲龙龟 拉莫斯': 33,
    '虚空遁地兽 雷克赛 挖掘机': 421,
    '镕铁少女 芮尔': 526,
    '炼金男爵 烈娜塔': 888,
    '荒漠屠夫 雷克顿 鳄鱼': 58,
    '傲之追猎者 雷恩加尔 狮子狗': 107,
    '放逐之刃 锐雯': 92,
    '机械公敌 兰博': 68,
    '符文法师 瑞兹': 13,
    '沙漠玫瑰 莎米拉': 360,
    '北地之怒 瑟庄妮 猪妹': 113,
    '涤魂圣枪 塞纳': 235,
    '星籁歌姬 萨勒芬妮': 147,
    '腕豪 瑟提': 875,
    '恶魔小丑 萨科': 35,
    '暮光之眼 慎': 98,
    '龙血武姬 希瓦娜 龙女': 102,
    '炼金术士 辛吉德': 27,
    '亡灵战神 塞恩': 14,
    '战争女神 希维尔': 15,
    '水晶先锋 斯卡纳 蝎子': 72,
    '琴瑟仙女 娑娜 琴女': 37,
    '众星之子 索拉卡 奶妈': 16,
    '诺克萨斯统领 斯维因 乌鸦': 50,
    '解脱者 塞拉斯': 517,
    '暗黑元首 辛德拉': 134,
    '河流之王 塔姆 蛤蟆': 223,
    '岩雀 塔利娅': 163,
    '刀锋之影 泰隆 男刀': 91,
    '宝石骑士 塔里克': 44,
    '迅捷斥候 提莫': 17,
    '魂锁典狱长 锤石': 412,
    '麦林炮手 崔丝塔娜 小炮': 18,
    '巨魔之王 特朗德尔': 48,
    '蛮族之王 泰达米尔': 23,
    '卡牌大师 崔斯特': 4,
    '瘟疫之源 图奇 老鼠': 29,
    '兽灵行者 乌迪尔': 77,
    '无畏战车 厄加特 螃蟹': 6,
    '惩戒之箭 维鲁斯': 110,
    '暗夜猎手 维恩': 67,
    '邪恶小法师 维嘉': 45,
    '虚空之眼 维克兹 大眼': 161,
    '愁云使者 薇古丝': 711,
    '皮城执法官 蔚': 254,
    '破败之王 佛耶戈': 234,
    '机械先驱 维克托': 112,
    '猩红收割者 弗拉基米尔 吸血鬼': 8,
    '不灭狂雷 沃利贝尔 狗熊': 106,
    '祖安怒兽 沃里克 狼人': 19,
    '齐天大圣 孙悟空 猴子': 62,
    '逆羽 霞': 498,
    '远古巫灵 泽拉斯': 101,
    '德邦总管 赵信': 5,
    '疾风剑豪 亚索': 157,
    '封魔剑魂 永恩': 777,
    '牧魂人 约里克': 83,
    '魔法猫咪 悠米': 350,
    '生化魔人 扎克': 154,
    '影流之主 劫': 238,
    '祖安花火 泽丽': 221,
    '爆破鬼才 吉格斯 炸弹人': 115,
    '时光守护者 基兰': 26,
    '暮光星灵 佐伊': 142,
    '荆棘之兴 婕拉': 143,
}
# id 英雄 字典
cid_champions_dic = {
    266: '暗裔剑魔 亚托克斯',
    103: '九尾妖狐 阿狸 狐狸',
    84: '离群之刺 阿卡丽',
    166: '影哨 阿克尚',
    12: '牛头酋长 阿利斯塔',
    32: '殇之木乃伊 阿木木',
    34: '冰晶凤凰 艾尼维亚 冰鸟',
    1: '黑暗之女 安妮 火女',
    523: '残月之肃 厄斐琉斯',
    22: '寒冰射手 艾希',
    136: '铸星龙王 奥瑞利安索尔',
    268: '沙漠皇帝 阿兹尔',
    432: '星界游神 巴德',
    200: '虚空女皇 卑尔维斯',
    53: '蒸汽机器人 布里茨',
    63: '复仇焰魂 布兰德 火男',
    201: '弗雷尔卓德之心 布隆',
    51: '皮城女警 凯特琳',
    164: '青钢影 卡密尔',
    69: '魔蛇之拥 卡西奥佩娅 蛇女',
    31: '虚空恐惧 科加斯 大虫子',
    42: '英勇投弹手 库奇 飞机',
    122: '诺克萨斯之手 德莱厄斯 诺手',
    131: '皎月女神 戴安娜',
    119: '荣耀行刑官 德莱文',
    36: '祖安狂人 蒙多',
    245: '时间刺客 艾克',
    60: '蜘蛛女皇 伊利斯',
    28: '痛苦之拥 伊芙琳 寡妇',
    81: '探险家 伊泽瑞尔',
    9: '远古恐惧 费德提克 稻草人',
    114: '无双剑姬 菲奥娜',
    105: '潮汐海灵 菲兹 小鱼人',
    3: '正义巨像 加里奥',
    41: '海洋之灾，普朗克 船长',
    86: '德玛西亚之力 盖伦',
    150: '迷失之牙 纳尔',
    79: '酒桶 古拉加斯',
    104: '法外狂徒 格雷福斯 男枪',
    887: '灵罗娃娃 格温',
    120: '战争之影 赫卡里姆 人马',
    74: '大发明家 黑默丁格 大头',
    420: '海兽祭司 俄洛伊',
    39: '刀锋意志 艾瑞莉娅 刀妹',
    427: '翠神 艾翁',
    40: '风暴之怒 迦娜 风女',
    59: '德玛西亚皇子 嘉文四世',
    24: '武器大师 贾克斯',
    126: '未来守护者 杰斯',
    202: '戏命师 烬',
    222: '暴走萝莉 金克斯',
    145: '虚空之女 卡莎',
    429: '复仇之矛 卡莉斯塔 滑板鞋',
    43: '天启者 卡尔玛',
    30: '死亡颂唱者 卡尔萨斯 死歌',
    38: '虚空行者 卡萨丁',
    55: '不祥之刃 卡特琳娜',
    10: '正义天使 凯尔',
    141: '影流之镰 凯隐',
    85: '狂暴之心 凯南',
    121: '虚空掠夺者 卡兹克',
    203: '永猎双子 千珏',
    240: '暴怒骑士 克烈',
    96: '深渊巨口 克格莫 大嘴',
    897: '纳祖芒荣耀 奎桑提 黑叔叔',
    7: '诡术妖姬 乐芙兰',
    64: '盲僧 李青',
    89: '曙光女神 蕾欧娜 日女',
    876: '含羞蓓蕾 莉莉娅',
    127: '冰霜女巫 丽桑卓 冰女',
    236: '圣枪游侠 卢锡安 奥巴马',
    117: '仙灵女巫 露露',
    99: '光辉女神 拉克丝',
    54: '熔岩巨兽 墨菲特 石头人',
    90: '虚空先知 马尔扎哈 蚂蚱',
    57: '扭曲树精 茂凯 大树',
    11: '无极剑圣 易大师',
    902: '明烛 米利欧',
    21: '赏金猎人 厄运小姐 女枪',
    82: '铁铠冥魂 莫德凯撒 铁男',
    25: '堕落天使 莫甘娜',
    950: '百裂冥犬 纳亚菲利 狗',
    267: '唤潮鲛姬 娜美',
    75: '沙漠死神 内瑟斯 狗头',
    111: '深海泰坦 诺提勒斯',
    518: '万花通灵 妮蔻',
    76: '狂野女猎手 奈德丽 豹女',
    895: '不羁之悦 尼菈',
    56: '永恒梦魇 魔腾',
    20: '雪原双子 努努',
    2: '狂战士 奥拉夫',
    61: '发条魔灵 奥利安娜',
    516: '山隐之焰 奥恩',
    80: '不屈之枪 潘森',
    78: '圣锤之毅 波比',
    555: '血港鬼影 派克',
    246: '元素女皇 奇亚娜',
    133: '德玛西亚之翼 奎因',
    497: '幻翎 洛',
    33: '披甲龙龟 拉莫斯',
    421: '虚空遁地兽 雷克赛 挖掘机',
    526: '镕铁少女 芮尔',
    888: '炼金男爵 烈娜塔',
    58: '荒漠屠夫 雷克顿 鳄鱼',
    107: '傲之追猎者 雷恩加尔 狮子狗',
    92: '放逐之刃 锐雯',
    68: '机械公敌 兰博',
    13: '符文法师 瑞兹',
    360: '沙漠玫瑰 莎米拉',
    113: '北地之怒 瑟庄妮 猪妹',
    235: '涤魂圣枪 塞纳',
    147: '星籁歌姬 萨勒芬妮',
    875: '腕豪 瑟提',
    35: '恶魔小丑 萨科',
    98: '暮光之眼 慎',
    102: '龙血武姬 希瓦娜 龙女',
    27: '炼金术士 辛吉德',
    14: '亡灵战神 塞恩',
    15: '战争女神 希维尔',
    72: '水晶先锋 斯卡纳 蝎子',
    37: '琴瑟仙女 娑娜 琴女',
    16: '众星之子 索拉卡 奶妈',
    50: '诺克萨斯统领 斯维因 乌鸦',
    517: '解脱者 塞拉斯',
    134: '暗黑元首 辛德拉',
    223: '河流之王 塔姆 蛤蟆',
    163: '岩雀 塔利娅',
    91: '刀锋之影 泰隆 男刀',
    44: '宝石骑士 塔里克',
    17: '迅捷斥候 提莫',
    412: '魂锁典狱长 锤石',
    18: '麦林炮手 崔丝塔娜 小炮',
    48: '巨魔之王 特朗德尔',
    23: '蛮族之王 泰达米尔',
    4: '卡牌大师 崔斯特',
    29: '瘟疫之源 图奇 老鼠',
    77: '兽灵行者 乌迪尔',
    6: '无畏战车 厄加特 螃蟹',
    110: '惩戒之箭 维鲁斯',
    67: '暗夜猎手 维恩',
    45: '邪恶小法师 维嘉',
    161: '虚空之眼 维克兹 大眼',
    711: '愁云使者 薇古丝',
    254: '皮城执法官 蔚',
    234: '破败之王 佛耶戈',
    112: '机械先驱 维克托',
    8: '猩红收割者 弗拉基米尔 吸血鬼',
    106: '不灭狂雷 沃利贝尔 狗熊',
    62: '齐天大圣 孙悟空 猴子',
    498: '逆羽 霞',
    101: '远古巫灵 泽拉斯',
    5: '德邦总管 赵信',
    157: '疾风剑豪 亚索',
    777: '封魔剑魂 永恩',
    83: '牧魂人 约里克',
    350: '魔法猫咪 悠米',
    154: '生化魔人 扎克',
    238: '影流之主 劫',
    221: '祖安花火 泽丽',
    115: '爆破鬼才 吉格斯 炸弹人',
    26: '时光守护者 基兰',
    142: '暮光星灵 佐伊',
    143: '荆棘之兴 婕拉'
}


# 位置枚举
class Lane(enum.Enum):
    TOP = 'top'
    MID = 'middle'
    JUG = 'jungle'
    BOT = 'bottom'
    SUP = 'support'


# 段位枚举
class Tiers(enum.Enum):
    CHALLENGER = 'challenger'
    G_MASTER = 'grandmaster'
    MASTER_PLUS = 'master_plus'
    MASTER = 'master'
    DIAMOND_PLUS = 'diamond_plus'
    DIAMOND = 'diamond'
    EMERALD_PLUS = 'emerald_plus'
    EMERALD = 'emerald'
    PLATINUM_PLUS = 'platinum_plus'
    PLATINUM = 'platinum'
    GOLD_PLUS = 'gold_plus'
    GOLD = 'gold'
    SILVER = 'silver'
    BRONZE = 'bronze'
    IRON = 'iron'
    ALL = 'all'
    UNRANKED = 'unranked'
    D2_PLUS = 'd2_plus'
#区域枚举
class Region(enum.Enum):
    ALL = "all"
    BRAZIL = "br"
    EUROPE_NORTH_EAST = "eune"
    EUROPE_WEST = "euw"
    JAPAN = "jp"
    KOREA = "kr"
    LATIN_AMERICA_NORTH = "lan"
    LATIN_AMERICA_SOUTH = "las"
    NORTH_AMERICA = "na"
    OCEANIA = "oce"
    PHILIPPINES = "ph"
    RUSSIA = "ru"
    SINGAPORE = "sg"
    THAILAND = "th"
    TURKEY = "tr"
    TAIWAN = "tw"
    VIETNAM = "vn"