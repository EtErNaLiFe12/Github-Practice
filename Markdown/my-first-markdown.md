<!-- 제목(Header) -->

<!-- #에 갯수를 통해 h1~h6까지 표현 함 -->

# 마크다운 문법 학습하기

## 마크다운 소개

## 마크다운 문법

### 제목

#### 부제목

##### 섹션

###### 내용

<!-- ------------------------------------------------>

<!-- 강조(Emphasis) -->

## 이텔릭체는 *이텔릭체*  or _이텔릭체_

## 두껍게는 **두껍게**  or __두껍게__

## **_이텔릭체_ 와 두껍게** 를 같이 사용 가능

## 취소선은 ~~물결표시(tilde)~~ 사용

## <u style="color: red;">밑줄 </u> u태그 사용

<!-- ------------------------------------------------>

<!-- 목록 list -->
===

#### 라면 끓이는 법

1. 라면을 구입 <!-- 1.은 ol 태그 -->
1. 물을 끓인다
1. 라면을 넣는다

#### 과일 목록
  - 사과 <!-- - 은 ul 태그 -->
  - 파인애플
  - 딸기
  - 오렌지
  - 망고

<!-------------------------------------------------->

<!-- 링크(LINK) -->

[Google](https://google.com)

[Naver](https://naver.com "링크 설명(title)을 작성하세요.")

[상대적 참조] (../users/login)


저는 [HEROPY 블로그](https://heropy.blog)를 운영하고 있습니다.

[구글][google url]에 [마크다운(Markdown)](https://heropy.blog/2017/09/30/markdown/)을 검색하세요!

[Dribbble][Dribbble link] <!--참조 링크 -->

[Dribbble link]: https://dribbble.com

구글: https://google.com

<https://google.com>

[google url]: https://google.com

<a href="https://google.com" target="_blank">구글</a> 
<!--새탭에 띄울지 현재탭에서 띄울지 target으로 정의하는데 이것은 마크다운에는 없는 기능이므로 필요시에는 a 태그 문법을 직접 작성해야함. -->

<!-------------------------------------------------->

<!-- 이미지 -->

<!-- ! - 이미지 [] - 대체 텍스트 입력 ( ) - src 입력 

 ![참조 링크][logo] 

 [logo]: https://heropy.blog/css/images/logo.png 


 ![대체텍스트](https://heropy.blog/css/images/logo.png) -->

<!-- 이미지 링크 -->
[![heropy](https://heropy.blog/css/images/logo.png)](https://heropy.blog)

<!-------------------------------------------------->

<!-- 코드강조 -->

<!-- inline 코드 강조 -->
`background` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할수 있습니다.

<!-- block 코드 강조 -->

```html
<a id="atag" href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```


```css

#atag {
    width: 100px;
    color: red;
}
```

<!-------------------------------------------------->

<!-- 표(table) -->
<!-- 콜론이 없으면 왼쪽정렬 / 양쪽에 있으면 중앙정렬 / 우측에 있으면 우측정렬-->

### position의 값

| 값 | 의미 | 기본값 |
|:---:|:---:|:---:| 
|`static` | 유형(기준 없음) / 배치 불가능 | `static` |
|`static` | 유형(기준 없음) / 배치 불가능 | `static` |
|`static` | 유형(기준 없음) / 배치 불가능 | `static` |

---

 값 | 의미 | 기본값 |
---|:---:|---:| 
`static` | 유형(기준 없음) / 배치 불가능 | `static`
`static` | 유형(기준 없음) / 배치 불가능 | `static`
`static` | 유형(기준 없음) / 배치 불가능 | `static`
---
값 | 의미
---:|---
`relative` | 자신을 기준으로 배치
`absolute` | 부모 요소를 기준으로 배치
`fixed` | **브라우저 창**을 기준으로 배치

---

<!-- 인용문(blockquote) -->

> 여기에 인용문을 삽입하세요!
>> 두번째 줄 인용문 삽입!
>>> 세번째 인용문 삽입!

---

<!-- 원시 HTML -->

<blockquote>원시 HTML 인용문!</blockquote>

<img src="https://heropy.blog/css/images/logo.png" alt="HEROPY" width="100">

---
<!-- --- 수평선 기호 -->

---
***
<!-- space 두번하면 줄바꿈됨 또는 br 태그 이용함-->

동해물과 백두산이 마르고 닳도록  
하느님이 보우하사<br> 우리나라 만세  
무궁화 삼천리 화려 강산<br>
대한사람 대한으로 길이 보전하세  