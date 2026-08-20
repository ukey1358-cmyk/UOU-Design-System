하단 그린 인디케이터 탭. 활성 탭은 그린 텍스트 + 2px 보더.

```jsx
<Tabs
  defaultValue="notice"
  items={[
    { id: "notice", label: "공지사항" },
    { id: "event", label: "행사" },
    { id: "recruit", label: "채용" },
  ]}
  onChange={(id) => console.log(id)}
/>
```

- 제어형: `value` + `onChange` · 비제어형: `defaultValue`
