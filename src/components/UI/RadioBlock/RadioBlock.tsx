// import styles from "./RadioBlock.module.scss";
// import { FC } from "react";
// import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

// interface IRadioBlockProps {
//   label: string;
//   values: any[];
//   register?: any;
//   name: string;
// }

// export const RadioBlock: FC<IRadioBlockProps> = ({
//   label,
//   values,
//   register,
//   name,
// }) => {
//   return (

//     <FormControl>

//       <RadioGroup row className={styles.main}>
//         {values.map((item) => (

//           <div className={styles.radioBlock} key={item}>

//             <FormControlLabel
//               {...(register && register(name))}
//               control={
//                 <Radio name={item.name} />
//               }
//               value={item.name}
//               label={item.label}
//               color="primary"
//               className={styles.radioGroup}
//             />

//             <span>{item.price}р</span>
//           </div>

//         ))}
//       </RadioGroup>

//     </FormControl>

//   );
// };


import styles from "./RadioBlock.module.scss";
import { FC } from "react";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Controller } from "react-hook-form";

interface IRadioBlockProps {
  label: string;
  values: any[];
  register?: any;
  name: string;
  control: any
}

export const RadioBlock: FC<IRadioBlockProps> = ({
  label,
  values,
  register,
  name,
  control
}) => {
  return (

    // <FormControl>

    //   <RadioGroup row className={styles.main}
    //     {...(register && register(name))}
    //   >
    //     {values.map((item) => (

    //       <div className={styles.radioBlock} key={item}>

    //         <FormControlLabel
    //           control={
    //             <Radio name={item.name} />
    //           }
    //           value={item.name}
    //           label={item.label}
    //           color="primary"
    //           className={styles.radioGroup}
    //         />

    //         <span>{item.price}р</span>
    //       </div>

    //     ))}
    //   </RadioGroup>

    // </FormControl>

    <FormControl component="fieldset">

      <Controller
        rules={{ required: true }}
        control={control}
        name={name}
        render={({ field }) => (

          <RadioGroup {...field} className={styles.main}>

            {values.map(item => (

              <div className={styles.radioBlock}>
                <FormControlLabel
                  // className={styles.radioGroup}
                  value={item.value}
                  control={<Radio />}
                  label={item.label}
                />
              </div>
            ))}

          </RadioGroup>
        )}
      />


    </FormControl>

  );
};
