import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
  // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
  state = {
    side: "tura",
    flipping: false,
    turaCount: 0,
    yaziCount: 0,
  };

  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.

    // randomOneOrZero fonksiyonunun geri dönüş değeri 1 ise yazı, 0 ise tura
    if (this.randomOneOrZero()) {
      this.setState((prev) => {
        return {
          ...prev,
          side: "yazi",
          yaziCount: prev.yaziCount + 1,
        };
      });
    } else {
      this.setState((prev) => {
        return {
          ...prev,
          side: "tura",
          turaCount: prev.turaCount + 1,
        };
      });
    }

    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  randomOneOrZero = () => {
    return Math.round(Math.random());
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.yaziCount + this.state.turaCount} </strong>
          atıştan
          <strong> {this.state.turaCount} </strong>ü tura
          <strong> {this.state.yaziCount} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
