export default function MiddleManagerMenu() {
  return (
    <table className="middle-manager-table">
      <thead>
        <tr className="middle-manager-thead">
          <th>대분류</th>
          <th>중분류</th>
          <th>제공여부</th>
          <th>권한</th>
          <th>범위</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan="3">대시보드</td>
          <td className="middle-manager-middle">차트</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td className="middle-manager-middle">토폴로지</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td className="middle-manager-middle">세션관제</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td rowSpan="4">활동감지</td>
          <td className="middle-manager-middle">이벤트</td>
          <td className="middle-mannager-availability">O</td>
          <td className="middle-mannager-authority">Read</td>
          <td className="middle-mannager-range">권한 할당된 노드</td>
        </tr>
        <tr>
          <td className="middle-manager-middle">세션</td>
          <td className="middle-mannager-availability">O</td>
          <td className="middle-mannager-authority">Read/Write (세션차단)</td>
          <td className="middle-mannager-range">권한 할당된 노드</td>
        </tr>
        <tr>
          <td className="middle-manager-middle">관리자</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td className="middle-manager-middle">사용자</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td rowSpan="6">자원</td>
          <td className="middle-manager-middle">관리자</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td className="middle-manager-middle">사용자</td>
          <td className="middle-mannager-availability">O</td>
          <td className="middle-mannager-authority">Read</td>
          <td className="middle-mannager-range">전체</td>
        </tr>
        <tr>
          <td className="middle-manager-middle">노드/목록</td>
          <td className="middle-mannager-availability">O</td>
          <td className="middle-mannager-authority">
            Read/Write (단 노드 추가 변경 삭제 불가, 폴더 이동 생성 변경 삭제 불가)
          </td>
          <td>전체</td>
        </tr>
        <tr>
          <td className="middle-manager-middle">노드/그룹</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td className="middle-manager-middle">노드/로그</td>
          <td className="middle-mannager-availability">O</td>
          <td className="middle-mannager-authority">Read</td>
          <td className="middle-mannager-range">권한 할당된 노드</td>
        </tr>
        <tr>
          <td className="middle-manager-middle">계정</td>
          <td className="middle-mannager-availability">O</td>
          <td className="middle-mannager-authority">Read/Write</td>
          <td className="middle-mannager-range">권한 할당된 노드</td>
        </tr>
        <tr>
          <td rowSpan="8">정책</td>
          <td className="middle-manager-middle">비밀번호</td>
          <td className="middle-mannager-availability">O</td>
          <td className="middle-mannager-authority">Read</td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td className="middle-manager-middle">토큰</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td className="middle-manager-middle">클라이언트</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td className="middle-manager-middle">접근제어/사용자</td>
          <td className="middle-mannager-availability">O</td>
          <td className="middle-mannager-authority">
            Read/Write (단 생성자 변경 삭제는 권한 할당된 노드 안에서만 가능)
          </td>
          <td>권한 할당된 노드</td>
        </tr>
        <tr>
          <td className="middle-manager-middle">접근제어/역할</td>
          <td className="middle-mannager-availability">O</td>
          <td className="middle-mannager-authority">
            Read/Write (단 생성자 변경 삭제는 권한 할당된 노드 안에서만 가능)
          </td>
          <td>권한 할당된 노드</td>
        </tr>
        <tr>
          <td className="middle-manager-middle">접근제어/룰셋</td>
          <td className="middle-mannager-availability">O</td>
          <td className="middle-mannager-authority">Read</td>
          <td className="middle-mannager-range">전체</td>
        </tr>
        <tr>
          <td className="middle-manager-middle">프로비저닝</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td className="middle-manager-middle">수명주기</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td rowSpan="2">이력</td>
          <td className="middle-manager-middle">요청</td>
          <td className="middle-mannager-availability">O</td>
          <td className="middle-mannager-authority">Read</td>
          <td className="middle-mannager-range">본인 요청 내역만</td>
        </tr>
        <tr>
          <td className="middle-manager-middle">수명주기</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td rowSpan="4">관리</td>
          <td className="middle-manager-middle">유형</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td className="middle-manager-middle">알림/공지</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td className="middle-manager-middle">프로세스</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
        <tr>
          <td className="middle-manager-middle">제품설정</td>
          <td className="middle-mannager-availability">X</td>
          <td className="middle-mannager-authority"></td>
          <td className="middle-mannager-range"></td>
        </tr>
      </tbody>
    </table>
  );
}
