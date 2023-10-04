import React from 'react';
import Page from './components/Page.jsx';
import './App.css'
import ContentPart from './components/ContentPart.jsx';
import Sidebar from './components/Sidebar.jsx';
import Main from './components/Main.jsx';
import SidebarSection from './components/SidebarSection.jsx';
import RecordWithIcon from './components/RecordWithIcon.jsx';
import user from './img/assets/user.png'
import msg from './img/assets/msg.png'
import gps from './img/assets/gps.png'
import phone from './img/assets/phone.png'
import RecordWithSkill from './components/RecordWithSkill.jsx';
import RecordWithCert from './components/RecordWithCert.jsx';
import Hobbys from './components/Hobbys.jsx';
import Clause from './components/Clause.jsx';

const DATA = {
  personalData: { name: "Adam Skorus", position: " ", birth: "30.10.2004", email: "adamskorus2004@gmail.com", phone: "+48 727 929 445", live: "Katowice, Tysiąclecie" },

  experience: [
    { employer: "27th Floor Bar & Restaurant  ", address: "ul. Uniwersytecka 13, \n 40-873 Katowice", position: "Kelner", responsibilities: ["Obsługiwanie gości na śniadaniach hotelowych", "Przygotowywanie kawy - latte art","Obsługiwanie lunchów i spotkań firmowych","Dbanie o czystość lokalu","Nakrywanie i sprzątanie stolików", "Przyjmowanie płatności w systemie POS","Przygotowywanie bufetu","Obsługiwanie room service","Samodzielne otwieranie i zamykanie restauracji", "Zaliczenie wewnętrzengo szkolenia kelnerskiego", "Zaliczenie wewnętrzengo szkolenia baristyczengo","Podawnie posiłków metodą niemiecką","Przyjmowanie rezerwacji","Układanie zastawy, serwertek i elementów dekoracji"  ], dateStart:"2022-07", dateEnd:"do dziś", link: "https://27thfloor.pl" },
  
  ],
  education: [
    { school: "Uniwersyteckie I Liceum Ogólnokształcące im. Juliusza Słowackiego w Chorzowie", faculty: "", specjalization: "matematyczno-informatyczna", dateStart: "2019-09", dateEnd: "2023-05", link: "https://slowacki.edu.pl/" },
  ],
  skills: [
    
    { skill: "Doświadczenie w zarządzaniu social media (Facebook, Instagram, TikTok, Twitter)", progressBar: [5, "Poziom średnio-zaawansowany"] },
    { skill: "Obsługa Pakietu Microsoft Office/Google Docs", progressBar: [6, "Poziom zaawansowany"] },
    { skill: "Obsługa ekspresu do kawy wraz z tworzeniem Latte Art"},
    { skill: "Organizacja pracy"},
    { skill: "Komunikatywność", progressBar: false},
    { skill: "Wysoka kultura osobista"},
    { skill: "Cierpliwość"},
    { skill: "Wielozadaniowość"},
    { skill: "Umiejętność pracy w zespole"},
    { skill: "Prawo jazdy kat. B"}
  
  ],
  languages: [
    { language: "Angielski", progressBar: [5, "B2/C1"] },
    { language: "Niemiecki", progressBar: [2, "A2/B1"] }
  ],
// certificates:[
 // { certificate: "Google Internetowe Rewolucje „Podstawy marketingu internetowego”" },
 // { certificate: "„JavaScript Bible 2019” 42,5 hour online course" } ],
hobbys: [
    "Granie na gitarze",
    "Programowanie",
    "Motoryzacja",
    "Matematyka",
    "Nieruchomości",
    "Informatyka",
    "Ekonomia",
    "Sport",
    "Szachy",
  ]
}

function App() {
  return (
    <div className="App">
      <Page>
        <Main data={DATA} firstPage={true}>
          {/* <ContentPart title={"PROJEKTY"} data={DATA.projects} /> */}
          <ContentPart title={"EDUKACJA"} data={DATA.education} />
          <ContentPart title={"DOŚWIADCZENIE"} data={DATA.experience} />
          <Hobbys title={"ZAINTERESOWANIA"} data={DATA.hobbys} />
          
        </Main>
        <Sidebar data={DATA} firstPage={true}>
          <SidebarSection title={"DANE OSOBOWE"}>
            <RecordWithIcon path={user} data={DATA.personalData.birth} />
            <RecordWithIcon path={msg} data={DATA.personalData.email} />
            <RecordWithIcon path={phone} data={DATA.personalData.phone} />
            <RecordWithIcon path={gps} data={DATA.personalData.live} />
          </SidebarSection>
          <SidebarSection title={"JĘZYKI OBCE"}>
            {DATA.languages.map(lang => <RecordWithSkill data={lang} title={"JĘZYKI OBCE"} />)}
          </SidebarSection>
          
          <SidebarSection title={"UMIEJĘTNOŚCI"}>
            {DATA.skills.map(skill => <RecordWithSkill data={skill} title={"UMIEJĘTNOŚCI"} />)}
          </SidebarSection>
          
          {/* <SidebarSection title={"CERTYFIKATY"}>
            {DATA.certificates.map(cert => <RecordWithCert data={cert} title={"CERTYFIKATY"} />)}
          </SidebarSection> */}
        </Sidebar>
      </Page>
      
    </div>
  );
}

export default App;
