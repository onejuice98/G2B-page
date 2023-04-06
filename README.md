# G2B 어드민 페이지 NajangBOT
## 🔗 Link
## 📒 Description
### 나라장터 데이터 크롤러를 통해 수집한 정보 토대로 만든 어드민(대시보드) 페이지
**Crawler Bot** https://github.com/onejuice98/G2B

* 대시보드 페이지로 총 수익, 입찰 성공 횟수, 최근 공고, 챗GPT 등 이용 가능
* 목록을 통해서 현재 공고 검색 가능 (오직 4개의 입력)
* 모의기를 통해서 모의 입찰 기능
* 차트로 기업의 이력 확인 (구현 중)

## Stack
| skill | version|
|---|---|
|React | 18.2.0|
React-query | 3.39.3
typescript | 4.4.2
axios | 1.3.4
tailwindcss | 3.2.7
nivo | 0.8

React-query : 데이터베이스를 사용하지 않아. 크롤링 데이터를 서버 메모리에 저장하다보니, 저장, 조회 작업에서 성능상의 문제 막기 위해서 캐싱을 이용하기 위해 사용 <br/>
nivo : 차트 구현
## Install & Start
```bash
git clone https://github.com/onejuice98/najangbot.git
yarn install
```
```bash
yarn start
```
## 화면 
