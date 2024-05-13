var Form = ({data, setData}) => {

    var startClock = () => {
        setData({...data, status: 'clock'});
    }

    var start = () => {
        var title = (data?.title || '').length ? data.title : 'Ministração';
        var timer = (data?.timer || '').length ? data.timer : '10:00';
        setData({...data, title: title, timer: timer, status: 'timer'});
    }

    return data.status != 'form' ? <></> : (
        <>
            <h1>Contador Regressivo</h1>
            <input type="text" placeholder="Título: Ministração" value={data.title} onChange={(e) => setData({...data, title: e.target.value})} />
            {/* <input type="text" placeholder="Próximo ponto" value={data.nextTitle} onChange={(e) => setData({...data, nextTitle: e.target.value})}  />  */}
            <input type="text" placeholder="Tempo: 10:00" value={data.timer} onChange={(e) => setData({...data, timer: e.target.value})}  />
            <button onClick={() => start()}>Iniciar</button>
        </>
    );

};

export default Form;