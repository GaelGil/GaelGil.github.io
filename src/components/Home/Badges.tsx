import { Badge, Image } from "@mantine/core";

interface BadgesProps {
  data: string[];
  w: number;
  h: number;
  badgeSize: string;
}

const Badges: React.FC<BadgesProps> = ({ data, w, h, badgeSize }) => {
  return (
    <>
      {data.map((item: string, idx: number) => (
        <Badge
          key={idx}
          leftSection={
            <Image
              w={w}
              h={h}
              src={`https://skillicons.dev/icons?i=${item.toLowerCase()}&theme=dark`}
            />
          }
          variant="light"
          color="brand.2"
          size={badgeSize}
        >
          {item}
        </Badge>
      ))}
    </>
  );
};

export default Badges;
