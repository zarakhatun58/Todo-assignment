import React, { useRef } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import printerIcon from '../../Assets/Images/printerIcon.svg'

export const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
        <div>
        <a href="https://taqeef.sharepoint.com/:b:/r/sites/OPR/ACModel/Agreements/ALN151A0002.pdf"></a>
    </div>
    );
  });

  interface type {
    componentRef: any | null;
    onBeforeGetContentResolve: React.MutableRefObject<null>;
    resolve: (value: unknown) => void

}

const Print = () => {
    const componentRef = React.useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

  
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            return <img src={printerIcon} alt="pdf"  onClick={handlePrint}/>;
          }}
          content={() => componentRef.current}
        />
      <div ref={componentRef}>
        <ComponentToPrint />
      </div>
       </div>
    );
};

export default Print;