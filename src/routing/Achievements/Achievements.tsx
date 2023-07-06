import { Box } from "@chakra-ui/react";
import AchievementTitle from "./AchievementTitle";
import AchievementList from "./AchievementList";

const Achievements = () => {
  return (
    <Box paddingX={6}>
      <AchievementTitle />
      <AchievementList />
    </Box>
  );
};

export default Achievements;
