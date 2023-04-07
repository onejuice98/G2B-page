# G2B 어드민 페이지 NajangBOT
## 🔗 Link
deploy by gh-pages : https://onejuice98.github.io/najangbot/

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

> React-query :<br/>
> 데이터베이스를 사용하지 않아 크롤링 데이터를 서버 메모리에 저장하다보니, 저장, 조회 작업에서 성능상의 문제 막기 위해서 캐싱을 이용하기 위해 사용 <br/>
> nivo : 차트 구현
## Install & Start
```bash
git clone https://github.com/onejuice98/najangbot.git
yarn install
```
```bash
yarn start
```
## 기능 및 화면

|<img width="1600" alt="스크린샷 2023-04-07 오후 6 13 40" src="https://user-images.githubusercontent.com/44994011/230581856-8cbd5432-28c5-4985-872c-856edc6f32c5.png">|Dashboard(main)|
|---|---|

* 총 수익 (Total Earn), 입찰 건수 (Win Rate), 최근 공고, 최근 공고 결과, 차트, 챗GPT

|<img width="1600" alt="스크린샷 2023-04-07 오후 6 13 58" src="https://user-images.githubusercontent.com/44994011/230582473-7f43806e-9115-4679-bcba-6879fe05d007.png">|List|
|---|---|

* 시작, 종료 날짜, 지역, 산업종류 선택하여 공고 목록 검색

|<img width="1600" alt="스크린샷 2023-04-07 오후 6 14 03" src="https://user-images.githubusercontent.com/44994011/230582749-d3962d27-5628-4444-8038-02a95c594f4c.png">|Charts|
|---|---|

* 예정금액 산정에 사용한 가격 % - 횟수 차트

|<img width="1668" alt="스크린샷 2023-04-07 오후 6 14 09" src="https://user-images.githubusercontent.com/44994011/230583032-6510cb03-746a-44cc-8b64-a9b378c82cdc.png">|모의|
|---|---|

* 모의 입찰
