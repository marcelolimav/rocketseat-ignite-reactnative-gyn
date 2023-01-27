import { VStack, HStack, Heading, Text, Icon } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useAuth } from "@hooks/useAuth";

import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

import defaultUserPhotoImg from "@assets/userPhotoDefault.png";
import { api } from "@services/api";

export function HomeHeader() {
  const { signOut, user } = useAuth();

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
            : defaultUserPhotoImg
        }
        alt="Imagem do usuário"
        size={16}
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>

        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity onPress={signOut}>
        <Icon
          as={MaterialCommunityIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  );
}
