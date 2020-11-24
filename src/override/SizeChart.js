import React from 'react';

const SizeChart = (props) => {
    let item = props.sizeChart
    console.log(typeof item.rule_content);
    return (
        <div className="product-sizechart"
           
        dangerouslySetInnerHTML={{__html:item.rule_content}}>

        </div>
    )
}

export default SizeChart;
