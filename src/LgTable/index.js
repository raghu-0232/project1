import styled from 'styled-components';

const LgTable = styled.div`
    .ag-header{
        background-color: #F5F7FA !important;
        border-radius:10px 10px 0px 0px;
        border-bottom:0px !important;
        .ag-header-container{
            width:100% !important;
            border-radius:10px 10px 0px 0px;
            border: #E6E5EB solid 1px;
            .ag-header-cell{
            background-color: #F5F7FA !important;
            color:#1C2B36;
            font-weight:normal;
            text-transform: capitalize;
            &:first-child{
                border-radius:10px 0px 0px 0px;
            }
            &:last-child{
                border-radius:0px 10px 0px 0px;
            }
        }
        }
    }
    .ag-body-viewport{
        border:#EDF0F5 solid 1px;
    }
    .ag-center-cols-container{
        width:100% !important;
    }

`;
export default LgTable;
