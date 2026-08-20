UOU의 기본 액션 버튼. 주색 그린은 액션에만 쓰므로 primary는 화면당 하나로 절제해 사용합니다.

```jsx
<Button variant="primary">신청하기</Button>
<Button variant="secondary">자세히 보기</Button>
<Button variant="outline" size="sm">취소</Button>
<Button variant="text">더보기</Button>
<Button variant="danger">삭제</Button>
```

- `variant`: primary(그린) · secondary(그린 보더) · outline(중립) · text(밑줄 hover) · danger
- `size`: sm 36 · md 44 · lg 52 (px height)
- `disabled` 시 opacity 0.45
