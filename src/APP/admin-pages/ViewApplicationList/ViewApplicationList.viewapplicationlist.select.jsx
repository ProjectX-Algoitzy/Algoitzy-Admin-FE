
import Select, { components } from 'react-select';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.select.styles";

const StudySelect = () => {
    const CustomDropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <img src="/img/triangle.png" alt="triangle-icon" style={{ width: "24px", height: "24px" }} />
            </components.DropdownIndicator>
        );
    };

    const options = [
        { value: 'koala 4기', label: 'koala 4기' },
        { value: 'koala 3기', label: 'koala 3기' },
        { value: 'koala 2기', label: 'koala 2기' },
        { value: 'koala 1기', label: 'koala 1기' }
    ];

    return (
        <itemS.StudySelectContainer
            options={options}
            defaultValue={options[0]}
            components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null }}
            isSearchable={false}
        />
    );
};
//
export default StudySelect;