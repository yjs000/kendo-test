
const VmsDsplCell = (props) => {
    const byteString = props.dataItem.dsplImgStr;
    const processed = 'data:image/png;base64,' + byteString;
    return (
        <td>
            <img src={processed} />
        </td>
    );
};

export default VmsDsplCell;
