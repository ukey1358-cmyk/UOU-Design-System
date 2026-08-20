단일 행 텍스트 입력. 포커스 시 그린 보더와 포커스 링이 나타나고, 오류는 `invalid`로 표시합니다.

```jsx
<Input placeholder="통합검색어를 입력하세요" />
<Input defaultValue="홍길동" />
<Input invalid placeholder="필수 항목입니다" />
<Input disabled defaultValue="수정 불가" />
```

- 높이: sm 36 · md 44 · lg 52
- placeholder 색: gray-400 · focus ring: rgba(0,154,68,.15)
