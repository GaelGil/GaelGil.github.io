import { Badge, Image } from "@mantine/core";
import type { BadgeProps } from "@mantine/core";

interface BadgesProps {
  data: string[];
  w: number;
  h: number;
  badgeSize: BadgeProps["size"];
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
              alt=""
              aria-hidden="true"
              src={`https://skillicons.dev/icons?i=${item.toLowerCase()}&theme=dark`}
            />
          }
          variant="light"
          color="brand"
          size={badgeSize}
          radius="sm"
          tt="none"
        >
          {item}
        </Badge>
      ))}
    </>
  );
};

export default Badges;
