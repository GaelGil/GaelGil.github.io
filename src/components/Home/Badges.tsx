import { Badge, Image } from "@mantine/core";

interface BadgesProps {
  data: string[];
}

const Badges: React.FC<BadgesProps> = (data) => {
  return data.map((item: string, idx: number) => (
    <Badge
      key={idx}
      leftSection={
        <Image
          w={25}
          h={25}
          src={`https://skillicons.dev/icons?i=${item.toLowerCase()}&theme=dark`}
        />
      }
      variant="light"
      color="brand.2"
      size="lg"
    >
      {item}
    </Badge>
  ));
};

export default Badges;
