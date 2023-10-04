import React from 'react';
import './Main.css';
import Title from './Title.jsx';

const Main = (props) => {
    return (
        <main>
            <section className="main">
                {props.firstPage ? <Title data={props.data.personalData}/> : ""}
                {props.children}
            </section>
            <div style={{position:"absolute",bottom:12,textAlign:"center"}}>Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).</div>
        </main>
    )
}

export default Main
