import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card marginY={5}>
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8}></Skeleton>
        <CardBody>
          <SkeletonText noOfLines={1} skeletonHeight={2}></SkeletonText>
        </CardBody>
      </HStack>
    </Card>
  );
};

export default GenreListSkeleton;
