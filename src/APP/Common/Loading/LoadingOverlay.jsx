import * as itemS from "./LoadingOverlay.styles";

export default function LoadingOverlay() {
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // 반투명 배경
      zIndex: 1000, // 다른 요소들보다 위에 표시되도록
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <itemS.Loading 
        src='https://kau-koala-v3.s3.ap-northeast-2.amazonaws.com/basic-image/koala-loading.gif' 
        alt='로딩중..' 
      />
    </div>
  );
}
