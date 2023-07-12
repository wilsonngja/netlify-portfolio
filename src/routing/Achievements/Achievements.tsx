import { Box } from "@chakra-ui/react";
import AchievementTitle from "./AchievementTitle";
import AchievementList from "./AchievementList";

const Achievements = () => {
  return (
    <Box>
      <AchievementTitle />
      <AchievementList />
    </Box>
  );
};

export default Achievements;
