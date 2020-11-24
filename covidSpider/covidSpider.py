# -*- coding = utf-8 -*-
# @time: 2020/11/2
# Author: Biluo
# @File: covidSpider.py

from selenium import webdriver
from datetime import datetime
import sys

print('开始爬取数据')
chromeOpt=webdriver.ChromeOptions()
chromeOpt.add_argument("--headless")
browser = webdriver.Chrome(chrome_options=chromeOpt)
url = 'https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner'
browser.get(url)

print('\n爬取国内疫情详细数据中...')
# 展开所有情况
unfold = browser.find_elements_by_css_selector('span')
clicks = []
for i in unfold:
    if i.text == '展开全部':
        clicks.append(i)
clicks[0].click()
clicks[1].click()

# 国内外疫情情况
trs = browser.find_elements_by_css_selector('tr')
domesticdata = []
cnt = 0

for tr in trs:
    cnt = cnt + 1
    # if cnt == 10:
    #     break
    if cnt <= 34:
        drd = dict.fromkeys(['area', 'incre', 'now' , 'sum' , 'cure' , 'death'])
    else:
        drd = dict.fromkeys(['area', 'incre', 'sum' , 'cure' , 'death'])
    tds = tr.find_elements_by_css_selector('td')
    if tds == None or len(tds) != 6:
        continue
    drd['area'] = tds[0].text
    drd['incre'] = tds[1].text
    if cnt <= 34:
        drd['now'] = tds[2].text
    drd['sum'] = tds[3].text
    drd['cure'] = tds[4].text
    drd['death'] = tds[5].text
    domesticdata.append(drd)
    if(cnt==34):print('国内疫情数据爬取完毕\n\n爬取全球疫情详细数据中...')

print('全球疫情数据爬取完毕\n\n爬取国内外疫情总数据中...')
# 输出为csv文件
import pandas as pd
df = pd.DataFrame(domesticdata[:34])
df.to_csv('covid_china.csv',index=None)
df = pd.DataFrame(domesticdata[34:])
df.to_csv('covid_global.csv',index=None)

divs = browser.find_elements_by_css_selector("div[class ^= 'VirusSummary']")
divs2 = browser.find_elements_by_css_selector("td > div > div")
flag = 0
covidinfo=[]
for div in divs:
    if flag == 1:
        covidinfo.append(div.text)
        flag = 0
    elif flag == 2:
        covidinfo.append(div.text)
        flag = 0
    elif flag == 3:
        covidinfo.append(div.text)
        flag = 0
    elif flag == 4:
        covidinfo.append(div.text)
        flag = 0
    elif flag == 5:
        covidinfo.append(div.text)
        flag = 0
    elif flag == 6:
        covidinfo.append(div.text)
        flag = 0
        break
    if div.text == '现有确诊':
        flag = 1
    elif div.text == '无症状':
        flag = 2
    elif div.text == '累计确诊':
        flag = 3
    elif div.text == '境外输入':
        flag = 4
    elif div.text == '累计治愈':
        flag = 5
    elif div.text == '累计死亡':
        flag = 6
flag = 0
for div in divs2:
    if flag == 1:
        covidinfo.append(div.text)
        flag = 0
    elif flag == 2:
        covidinfo.append(div.text)
        flag = 0
    elif flag == 3:
        covidinfo.append(div.text)
        flag = 0
    elif flag == 4:
        covidinfo.append(div.text)
        flag = 0
        break
    if div.text == '现有确诊':
        flag = 1
    elif div.text == '累计确诊':
        flag = 2
    elif div.text == '累计治愈':
        flag = 3
    elif div.text == '累计死亡':
        flag = 4
current_time=datetime.now().strftime('%Y-%m-%d %H:%M:%S');
covidinfo.append(current_time)
df = pd.DataFrame(covidinfo)
df.to_csv('covid_sum.csv',index=None,header=None)
print('所有数据已爬取完毕\n\n已保存为csv文件(covid_china,covid_global,covid_sum)')
