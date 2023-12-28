const commonLinuxOptions = [
  { 옵션: 'SSH 포트번호', 설명: '추가할 노드의 SSH 포트번호' },
  { 옵션: 'TELNET 포트번호', 설명: '추가할 노드의 TELNET 포트번호' },
  { 옵션: 'FTP 포트번호', 설명: '추가할 노드의 FTP 포트번호' },
  { 옵션: '등록전용', 설명: '등록전용으로 설정된 노드는 계정 Recon이 일어나지 않고 계정 등록만 가능하다.' },
  { 옵션: '링크전용', 설명: '링크전용으로 설정된 노드는 룰셋 적용 및 세션 현황에 표시되지 않고 계정 연결만 가능하다.' },
  { 옵션: '포트테스트 무시', 설명: '포트테스트 무시로 설정된 노드는 포트 연결 테스트를 하지 않는다.' },
  {
    옵션: '접속계정 로그인테스트 무시',
    설명: '접속계정 로그인테스트 무시로 설정된 노드는 로그인 정보를 포함한 상태로 포트 연결 테스트를 하지 않는다.',
  },
];

const commonWindowOptions = [
  { 옵션: '링크전용', 설명: '링크전용으로 설정된 노드는 룰셋 적용 및 세션 현황에 표시되지 않고 계정 연결만 가능하다.' },
  { 옵션: '포트테스트 무시', 설명: '포트테스트 무시로 설정된 노드는 포트 연결 테스트를 하지 않는다.' },
];

const exceptionLinuxOptions = [{ 옵션: 'sudo 사용자', 설명: '추가할 노드의 계정에 sudo 권한 부여 여부' }];
const exceptionNetworkOptions = [
  { 옵션: '계정동기화 스크립트', 설명: '계정 동기화 시 사용할 스크립트' },
  { 옵션: '계정추가 스크립트', 설명: '계정 추가 시 사용할 스크립트' },
  { 옵션: '계정수정 스크립트', 설명: '계정 수정 시 사용할 스크립트' },
  { 옵션: '계정삭제 스크립트', 설명: '계정 삭제 시 사용할 스크립트' },
  { 옵션: '계정비밀번호변경 스크립트', 설명: '계정 비밀번호 변경 시 사용할 스크립트' },
  { 옵션: 'OS버전 스크립트', 설명: 'os버전 확인 시 사용할 스크립트' },
];

const exceptionWindowOptions = [
  { 옵션: 'RDP 포트번호', 설명: '추가할 노드의 RDP 포트번호' },
  { 옵션: 'WinRM 포트번호', 설명: '추가할 노드의 WinRM 포트번호' },
  { 옵션: 'HTTPS 사용여부', 설명: '추가할 노드의 HTTPS 사용 여부' },
  { 옵션: '등록전용', 설명: '등록전용으로 설정된 노드는 계정 Recon이 일어나지 않고 계정 등록만 가능하다.' },
  {
    옵션: '접속계정 로그인테스트 무시',
    설명: '접속계정 로그인테스트 무시로 설정된 노드는 로그인 정보를 포함한 상태로 포트 연결 테스트를 하지 않는다.',
  },
];
const exceptionWebOptions = [
  { 옵션: '프록시 Listen주소', 설명: '추가할 노드의 프록시 Listen주소' },
  { 옵션: 'HTTP2여부', 설명: '추가할 노드의 HTTP2 여부' },
];

export const AddingNodeLinuxOptions = commonLinuxOptions.concat(exceptionLinuxOptions);
export const AddingNodeNetworkOptions = commonLinuxOptions.concat(exceptionNetworkOptions);
export const AddingNodeWindowOptions = commonWindowOptions.concat(exceptionWindowOptions);
export const AddingNodeWebOptions = commonWindowOptions.concat(exceptionWebOptions);
