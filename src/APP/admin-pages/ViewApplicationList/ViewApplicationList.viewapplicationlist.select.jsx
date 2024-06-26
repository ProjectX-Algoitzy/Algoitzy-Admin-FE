import Select, { components } from 'react-select';
import * as itemS from "../../admin-pages/ViewApplicationList/Styled/ViewApplicationList.viewapplicationlist.select.styles";

const StudySelect = ({ generationOptions, onChange }) => {
    const CustomDropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <img src="/img/triangle.png" alt="triangle-icon" style={{ width: "24px", height: "24px" }} />
            </components.DropdownIndicator>
        );
    };

    const options = generationOptions.map(generation => ({
        value: generation,
        label: `koala ${generation}기`
    }));

    const placeholderText = generationOptions.length > 0 ? `koala ${generationOptions[0]}기` : '기수 선택';

    return (
        <itemS.StudySelectContainer
            options={options}
            placeholder={placeholderText}
            defaultValue={options.length > 0 ? options[0] : undefined}
            components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null }}
            isSearchable={false}
            onChange={onChange}
        />
    );
};

export default StudySelect;
