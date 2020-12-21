import React, { Component } from 'react';
import { CardContext, Card } from '../services/card-context';

class Mosaic extends Component{
  render() {

        let cardList = this.context;
        let items: any = [];
        let totalHeight = 0;
        cardList.forEach((card: Card) => {
            items.push(<div key={"card"+card.index} className="item" style={{height : card.height}}>
                {card.index}
                </div>);
        });
        items.push(<span key="break1" className="item break"></span>);
        items.push(<span key="break2" className="item break"></span>);
        items.push(<span key="break3" className="item break"></span>);
        return (
        <div className="mosaic">
        {items}
        </div>
        );
    }
}

Mosaic.contextType = CardContext;

export default Mosaic;