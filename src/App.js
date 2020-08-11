import React, { Component } from 'react';
import './App.scss';
import HeadPart from './components/HeadPart';
import ShopItem from './components/ShopItem';

class App extends Component {
  render() {
    return (
      <main className="app">
        <HeadPart />
        <h2>iPhone</h2>
        <table className="iPhone">
          <tr>
            <td>
              <ShopItem name="iPhone11" price="￥5999" />
            </td>
            <td>
              <ShopItem name="iPhoneXS" price="￥5399" />
            </td>
            <td>
              <ShopItem name="iPhoneSE" price="￥3599" />
            </td>
          </tr>
        </table>

        <h2>HuaWei</h2>
        <table className="HuaWei">
          <tr>
            <td>
              <ShopItem name="HuaWei P40 Pro+" price="￥7999" />
            </td>
            <td>
              <ShopItem name="HuaWei Mate 30" price="￥5000" />
            </td>
            <td>
              <ShopItem name="HuaWei nova 7" price="￥4000" />
            </td>
          </tr>
        </table>
      </main>
    );
  }
}

export default App;
