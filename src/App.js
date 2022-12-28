import Notice from './component/Notice';
import noticedb from './data/notice.json';


function App() {
  const noticejs = noticedb;
  return (
    <div className="App">
    {/* 컴포넌트 자바스크립트실행문!! 옵션 매개인자이해 */}
      <Notice title={noticejs.title} 
              cls = {noticejs.cls}
              contents={noticejs.content}></Notice>
     
    </div>
  );
}

export default App;
