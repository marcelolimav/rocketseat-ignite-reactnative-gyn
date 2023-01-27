import { Input as InputNB, IInputProps, FormControl } from "native-base";

type Props = IInputProps & {
  error?: string | null;
};

export function Input({ error, isInvalid, ...rest }: Props) {
  const invalid = !!error || isInvalid;
  return (
    <FormControl isInvalid={invalid} mb={4}>
      <InputNB
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        placeholderTextColor="gray.300"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500",
        }}
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
