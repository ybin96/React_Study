// JSX 무조건 써야되진 않지만 거의다 JSX사용
// HTML과 다르게 여는태그 뒤에 닫는태그가 반드시 있어야함.

// 하나의 컴포넌트는 하나의 JSX태그만 리턴 가능함

// 여러개의 JSX태그가 리턴되는 경우
// <div> / <> 로 감싸서 리턴하면 됨.

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}
