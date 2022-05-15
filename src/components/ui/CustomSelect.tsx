import React, { FC } from "react";
import type { Option } from "../../types";
import Select, { ActionMeta } from "react-select";

interface Props {
  options: Option[];
  value: Option,
  onChange: (itemSelected:Option | null, actionMeta: ActionMeta<Option> ) => void
}

const formatOptionLabel = (option: Option) => (
  <div style={{ display: "flex" }}>
    {option.value === "" ? (
      <div>{option.label}</div>
    ) : (
      <>
        <div
          style={{
            backgroundImage: `url(/assets/${option.value}-icon.png)`,
            width: "24px",
            height: "24px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginRight: "13px",
          }}
        />
        <div>{option.label}</div>
      </>
    )}
  </div>
);

export const CustomSelect: FC<Props> = ({ options, value, onChange }) => {

  console.log('RERENDERSELECT')
  return (
    <div
      style={{
        position: "relative",
        zIndex: 2,
      }}
    >
      <Select
        defaultValue={options[0]}
        value={value}
        onChange={onChange}
        menuPortalTarget={document.body}
        menuPosition="fixed"
        formatOptionLabel={formatOptionLabel}
        options={options}
        isSearchable={false}
        styles={{
          menu: (provided) => ({
            ...provided,
            width: 240,
            height: 32,
            fontFamily: "Roboto",
            fontSize: "14px",
          }),

          option: (provided, state) => ({
            ...provided,
            backgroundColor:
              state.isFocused && !state.isSelected
                ? "#abdefa"
                : state.isSelected
                ? provided.backgroundColor
                : "#fff",
            boxShadow: "0 2px 2px 0 #dad8d8",
          }),
          container: (provided) => ({
            ...provided,
            width: 240,
            height: 32,
            fontFamily: "Roboto",
            zIndex: 9999,
          }),
          menuPortal: (provided) => ({
            ...provided,
            zIndex: 9999,
            borderColor: "red",
          }),
        }}
      />
    </div>
  );
};

export const CustomSelectedMemorized = React.memo(CustomSelect)