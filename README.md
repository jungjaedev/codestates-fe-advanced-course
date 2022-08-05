# PROJECT : codestates-fe-advanced-course

## 배포링크 <img width="20px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629972215/noticon/vgvbhxae6jrvqpcnu0vb.png">
- [Github Pages](https://jungjaedev.github.io/)

<br>

## 사용한 스택 <img width="20px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1626766557/noticon/g6xgdwtkbtfbwdl6ydgw.png">

<div>
<span>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black">
</span>
</div>

<br>

## App View <img width="20px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1644775356/noticon/xydfr6p7egplufr2jpqn.png">
토글을 클릭하여 확인 해주세요 
<details>
  <summary>글 목록</summary>
<img src='https://user-images.githubusercontent.com/69428509/183090604-eb829689-647d-480e-b471-2f841a2fdf11.gif' />
</details>
<details>
  <summary>상세보기</summary>
<img src='https://user-images.githubusercontent.com/69428509/183090364-eed2885f-e254-4128-a692-ccd00c44deec.gif' />
</details>
<details>
  <summary>페이징</summary>
<img src='https://user-images.githubusercontent.com/69428509/183090083-bea4d93a-17ee-4084-a11d-47744a3c8ad7.gif' />
</details>

<br>

## 구현한 기능 목록 <img width="20px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1575060171/noticon/hkunixbsjynxpm5ndze6.svg">
- 글 목록
- 게시글 상세보기
- 페이징 처리(화살표 기능)

<br>

## 구현 방법 혹은 구현하면서 어려웠던 점 <img width="20px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567593192/noticon/za5oft8gpi5yabrlvgfp.gif">

- 페이지 버튼 양쪽에있는 화살표 버튼의 기능을 만드는 것이 어려웠습니다. 단순히 버튼의 숫자만 변경하는 것이 아닌 게시물 리스트도 바꿔줘야하고, 마지막과 첫번째 페이지에는 화살표 버튼을 비활성화를 해주어야 했습니다. 화면에 목록을 띄우거나 버튼을 바꾸어주는 것은 useState를 통해 해결하였습니다. 버튼 비활성화 하는 기능은 className을 통해 따로 해결하려고 했지만 button의 disabled속성을 사용하여 state를 오른쪽과 왼쪽을 나누어 해결하였습니다. 


<br>

## 추가 구현 사항에 대한 구현 방법과 설명 <img width="20px" src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1593075007/noticon/sjeakcxa5ujcylmrlnvd.png">
- 100개의 게시글을 페이지당 10개씩 화면에 띄우는 기능을 구현했습니다. 
- axios를 통해 받아온 posts데이터를 useState를 이용하여 초기값에 첫 10개의 게시글을 넣고, 이후에는 하단 버튼을 눌렀을 시 버튼의 number를 통해 해당하는 페이지의 게시글 목록을 보여주게 하였습니다. 
