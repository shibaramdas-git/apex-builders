import Custom404 from "@/components/Custom404";

export default function DynamicPage() {
  return (
    <div>
      <p>Catch all routs starting with "/" ohter than the defined ones.</p>
      <Custom404 />
    </div>
  );
}
