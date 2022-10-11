import {useState, useContext, useRef} from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControl,
  Button,
} from '@mui/material';
import {AuthContext} from '../contexts/Auth';
import Header from '../components/Header';

const CONTRACT_TYPE = {
  azure: <div style={{fontSize: '10pt'}}>azure</div>,
  premier: <div style={{fontSize: '10pt'}}>premier</div>,
  professional: <div style={{fontSize: '10pt'}}>professional</div>,
};

export default function Home() {
  const {
    userInfo: {name, email, phoneNumber},
  } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    trackingID: '',
    companyType: '',
    customerName: '',
    product: '',
    title: '',
    contractType: '',
  });

  const emailTitleRef = useRef();
  const emailContentRef = useRef();

  const {trackingID, companyType, customerName, product, title, contractType} =
    userData;

  const handleTrackingIDKeyUp = ({target: {value}}) => {
    setUserData((prev) => ({...prev, trackingID: value}));
  };
  const handleCompanyTypeChange = ({target: {value}}) => {
    setUserData((prev) => ({...prev, companyType: value}));
  };
  const handleCustomerNameChange = ({target: {value}}) => {
    setUserData((prev) => ({...prev, customerName: value}));
  };
  const handleProductChange = ({target: {value}}) => {
    setUserData((prev) => ({...prev, product: value}));
  };
  const handleTitleChange = ({target: {value}}) => {
    setUserData((prev) => ({...prev, title: value}));
  };
  const handleContractTypeChange = ({target: {value}}) => {
    setUserData((prev) => ({...prev, contractType: value}));
  };

  const writeTextClipboard = async (text) => {
    try {
      console.log(text);

      await window.navigator.clipboard.writeText(text);
      alert('복사 성공');
    } catch (error) {
      alert('죄송합니다. 복사 실패 ㅠㅠ');
    }
  };

  const writeClipboard = async (text) => {
    try {
      const type = 'text/html';
      const blob = new Blob([text], {type});
      const data = [new ClipboardItem({[type]: blob})];
      await window.navigator.clipboard.write(data);
      alert('복사 성공!');
    } catch (error) {
      alert('죄송합니다. 복사 실패 ㅠㅠ');
    }
  };

  const copyEmailTitle = () => {
    const text = emailTitleRef.current.textContent;
    writeTextClipboard(text);
  };

  const copyEmailContent = () => {
    const text = emailContentRef.current.innerHTML;
    writeClipboard(text);
  };

  return (
    <>
      <Header />

      <Box sx={{display: 'flex', width: '100%', height: '100%'}}>
        <Box sx={{flex: '1 1 0', padding: 3}}>
          <TextField
            sx={{maxWidth: 400}}
            fullWidth
            label="Tracking ID"
            margin="normal"
            onKeyUp={handleTrackingIDKeyUp}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Company Type</InputLabel>
            <Select
              label="Company Type"
              sx={{maxWidth: 400}}
              onChange={handleCompanyTypeChange}
            >
              <MenuItem value="samsung">samsung</MenuItem>
              <MenuItem value="hyundai">hyundai</MenuItem>
              <MenuItem value="lg">lg</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{maxWidth: 400}}
            fullWidth
            label="Customer Name"
            margin="normal"
            onKeyUp={handleCustomerNameChange}
          />
          <TextField
            sx={{maxWidth: 400}}
            fullWidth
            label="Product"
            margin="normal"
            onKeyUp={handleProductChange}
          />
          <TextField
            sx={{maxWidth: 400}}
            fullWidth
            label="Title"
            margin="normal"
            onKeyUp={handleTitleChange}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Contract Type</InputLabel>
            <Select
              label="Contract Type"
              sx={{maxWidth: 400}}
              onChange={handleContractTypeChange}
            >
              <MenuItem value="azure">azure</MenuItem>
              <MenuItem value="premier">premier</MenuItem>
              <MenuItem value="professional">professional</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" sx={{margin: 1}} onClick={copyEmailTitle}>
            title copy
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={copyEmailContent}
          >
            content copy
          </Button>
        </Box>
        <Box
          sx={{flex: '3 3 0', borderLeft: 1, borderColor: '#eee', padding: 3}}
        >
          <div>
            <div ref={emailTitleRef}>
              TrackingID#{trackingID} / {companyType} / {product} / {title}
              <br />
              <br />
              <br />
            </div>
            <div ref={emailContentRef} style={{fontFamily: 'Malgun Gothic'}}>
              <div>
                안녕하세요 {customerName} 고객님, 한국마이크로소프트
                고객기술지원부 임재성입니다.
                <br />
                기술 지원 서비스를 이용해 주셔서 감사합니다.
                <br />
                <br />
                문의하신 내용에 대해 아래와 같이 정리합니다.
                <br />
                문의 사항과 지원 범위에 대해 확인을 부탁드리며, 잘못 이해한
                부분이 있으면 알려주시기 바랍니다.
                <br />
                ________________________________________
                <br />
                [문의 번호]
                <br />- {trackingID}
                <br />
                [환경]
                <br />- {product}
                <br />
                [문의 사항]
                <br />- {title}
                <br />
                [지원 범위]
                <br />
                <br />
                [진행 사항]
                <br />
                <br />
                <br />
                ________________________________________
                <br />
                <br />
                감사합니다.
                {CONTRACT_TYPE[contractType]}
              </div>

              <br />
              <div style={{fontSize: '9pt', fontWeight: 'bold'}}>{name}</div>
              <div style={{fontSize: '9pt', fontFamily: 'Malgun Gothic'}}>
                한국마이크로소프트 고객기술지원부 |{' '}
                <a href={`mailto:{email}`}>{email}</a> | 직통번호 {phoneNumber}{' '}
                | 프로페셔널 고객센터 080-986-1000
              </div>
              <div>
                ______________________________________________________________________________________________________________________________________
              </div>
              <div
                style={{
                  fontSize: '9pt',
                  fontFamily: 'Malgun Gothic',
                  color: '#7F7F7F',
                }}
              >
                저희 Microsoft 고객 기술 지원은 프로페셔널 지원 범위 및 애저
                지원 플랜을 준수합니다. 지원 내용의 시스템 기록을 위해 회신 주실
                때 반드시 전체 회신으로 support@mail.support.microsoft.com
                메일을 포함하여 응답 부탁 드립니다.
              </div>
              <br />
              <div
                style={{
                  fontSize: '8pt',
                  fontFamily: 'Malgun Gothic',
                  fontWeight: 'bold',
                }}
              >
                MICROSOFT CONFIDENTIAL
              </div>
              <div style={{fontSize: '7pt', fontFamily: 'Malgun Gothic'}}>
                본 이메일(첨부 파일 포함, 이하 동일)은 Microsoft의 영업비밀을
                포함하고 있습니다. 본 이메일은 합리적으로 보아 귀사 내부에서
                알아야 할 필요가 있는 담당자만이 접근할 수 있으며, Microsoft가
                동의하지 않는 한 제3자에게 제공, 공유하거나 복제할 수 없습니다.
                본 이메일은 정보제공만을 목적으로 하며, 본 이메일에 포함되어
                있는 모든 정보는 발송 시점의 Microsoft의 견해를 반영한 것입니다.
                본 이메일에 포함된 내용은 변경될 수 있습니다. Microsoft는 본
                이메일에 포함된 내용에 대하여 명시적, 묵시적 또는 법적인 보증을
                하지 않습니다. © 2014 Microsoft Corporation. All rights
                reserved.
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}
