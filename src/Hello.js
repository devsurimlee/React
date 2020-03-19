import React from 'react';

function Hello({name, color}) {
return <div style={{
    background: '#231d1d' ,
    color: color
}} >안녕하세요! {name}</div>
}

Hello.defaultProps = {
    name: '이름없음',
    color: 'pink'
};

export default Hello;