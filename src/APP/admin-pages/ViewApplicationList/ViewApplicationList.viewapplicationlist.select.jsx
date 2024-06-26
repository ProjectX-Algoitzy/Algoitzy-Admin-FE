
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

    // const options = [
    //     { value: 14, label: 'koala 14기' },
    //     { value: 13, label: 'koala 13기' },
    //     { value: 12, label: 'koala 12기' },
    //     { value: 11, label: 'koala 11기' }
    // ];

    // const options = [
        
    //     { value: generationOptions[0], label: `koala ${generationOptions[0]}기` },
    //     { value: generationOptions[1], label: `koala ${generationOptions[1]}기` },
    //     { value: generationOptions[2], label: `koala ${generationOptions[2]}기` },
    //     { value: generationOptions[3], label: `koala ${generationOptions[3]}기` },
    // ];
    const options = generationOptions.map(generation => ({
		value: generation,
		label: `koala ${generation}기`
	}));

    

    return (
        <itemS.StudySelectContainer
            options={options}
            placeholder="기수 선택"
            defaultValue={options[0]}
            components={{ DropdownIndicator: CustomDropdownIndicator, IndicatorSeparator: null }}
            isSearchable={false}
            onChange={onChange}
        />
    );
};
//
export default StudySelect;