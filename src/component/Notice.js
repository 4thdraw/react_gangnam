
function Notice(props){
    //반드시 막는태그 닫는태그 짝
    //부모태그가 하나
    //컴포넌트의 첫번째인자 props의 기능은 실행의 옵션에 접근
    //컴포넌트함수는 손오공, 컴포넌트는 손오공분신
      return(
        <>
          <h2>{props.title}</h2>
          <p> {props.contents.length}건의 게시글이 있습니다.</p>
          {/* ul>li*5{공지사항제목} */}
          <ul className={ `${props.cls[0]} ${props.cls[1]}` } >
            {
              props.contents.map((item, index) => {
  //console.log(item, index)
  // map메서드는 정렬객체(props.contents)를 선택자로 한다.
                return (
                         <li key={'list'+index}>
                           <p>{item.subject}</p>
                           <div>{item.contents}</div>
                         </li>
                         );
              }) 
            }
          </ul>
        </>
      )
  }

export default Notice;
