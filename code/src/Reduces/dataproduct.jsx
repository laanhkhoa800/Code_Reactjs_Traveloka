var initialState =[
    {
        id: 1,
        CodeRoom: 'R001',
        Address: '174/35 Nguyễn Tư Giản',
        Picture: './img/R01.jpn',
        Price: 2000000,
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return[...state]
    }
};

export default products;