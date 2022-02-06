import {useEffect, useState} from "react";


function Coins() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(0);
    const [coinVal, setCoinVal] = useState(0);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then(json => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    const setCoinData = (data) => {
        setCoinVal(data.target.value);
        console.log(coinVal)
    }
    const onChange = (event) => {
        event.preventDefault();
        if(event.target.type !== "number"){
            alert("Please enter a number");
            event.target.value = null;
            return;
        }
        let inputMoney = Number(event.target.value);
        setMoney(inputMoney);
    }
    return(
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> :
                (
                    <select onChange={setCoinData}>
                        <option value="">선택해주세요.</option>
                        {coins.map((coin) => (
                            <option id={coin.id} key={coin.id} value={coin.quotes.USD.price}>
                                {coin.name} ({coin.symbol}): $ {coin.quotes.USD.price} USD
                            </option>))}
                    </select>
                )
            }
            <hr/>
            <input type="number" onChange={onChange} placeholder={"숫자를 입력하세요."}/>달
            <hr/>
            {(money === 0 || coinVal === 0) ? "" : `당신이 구매할 수 있는 코인의 갯수는 약 ${money/coinVal}개 입니다.`}
        </div>
    );
}

export default Coins;