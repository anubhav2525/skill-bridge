"use client";
import CustomSelect from "@/components/ui/custom-select";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses } from "@/constants/courses";
import CourseCard from "@/components/course-card/course-card";
import Subscribe from "@/components/landing-page/subscribe/subscribe";

type FormValues = {
  rating?: string;
  duration?: string;
  level?: string;
  category?: string;
  fee?: string;
  language?: string;
  sort?: string;
};

const ratingOptions = ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"];

const durationOptions = ["1 Month", "3 Months", "6 Months", "1 Year"];

const levelOptions = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert",
  "Master",
];

const categoryOptions = ["Web Development", "Data Science", "Machine Learning"];

const feeOptions = ["free", "paid"];

const languageOptions = ["English", "Spanish", "French", "German"];

const sortOptions = [
  "Most Popular",
  "Highest Rated",
  "Lowest Price",
  "Highest Price",
];

const CoursesPage = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      rating: "",
      duration: "",
      level: "",
      category: "",
      fee: "",
      language: "",
      sort: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Filter applied with:", data);
  };

  return (
    <section className="w-full ">
      <Sheet>
        <div className="w-full bg-white">
          <div className="w-full max-w-7xl mx-auto  py-12 px-4">
            <h1 className="text-4xl font-bold">Courses Page</h1>
            <p className="pt-2 text-lg">Explore our wide range of courses.</p>

            <div className="flex flex-col md:flex-row gap-4 w-full my-6 ">
              <div className="w-full flex">
                <input
                  placeholder="Search for courses..."
                  className="flex-1 py-3 px-4 rounded-l-lg focus:outline-none  text-black bg-gray-50 "
                />
                <button className="bg-orange-500 text-white px-6 rounded-r-lg font-normal hover:bg-orange-600 flex items-center gap-1">
                  <Search size={18} />{" "}
                  <span className="hidden md:flex ">Search</span>
                </button>
              </div>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="h-full flex bg-gray-50   py-3 px-4"
                >
                  <SlidersHorizontal size={18} />{" "}
                  <span className="hidden md:flex ">Filter</span>
                </Button>
              </SheetTrigger>
            </div>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>Apply Filter</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="w-full  pt-4">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col items-start gap-4 w-full"
                >
                  <CustomSelect
                    name="category"
                    label="Category"
                    options={categoryOptions}
                    control={control}
                  />
                  <CustomSelect
                    name="duration"
                    label="Duration"
                    options={durationOptions}
                    control={control}
                  />
                  <CustomSelect
                    name="level"
                    label="Level"
                    options={levelOptions}
                    control={control}
                  />
                  <CustomSelect
                    name="rating"
                    label="Rating"
                    options={ratingOptions}
                    control={control}
                  />
                  <CustomSelect
                    name="fee"
                    label="Fee"
                    options={feeOptions}
                    control={control}
                  />
                  <CustomSelect
                    name="language"
                    label="Language"
                    options={languageOptions}
                    control={control}
                  />
                  <CustomSelect
                    name="sort"
                    label="Sort By"
                    options={sortOptions}
                    control={control}
                  />
                </form>
              </div>
              <SheetFooter className="pt-4">
                <SheetClose asChild>
                  <Button
                    type="submit"
                    variant="outline"
                    className="bg-orange-500 text-white px-6 font-normal hover:bg-orange-600 flex items-center hover:text-white"
                  >
                    Apply
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </div>
        </div>

        <div className="w-full bg-gray-50 ">
          <div className="w-full max-w-7xl mx-auto py-12 px-4">
            {/* Course cards will go here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {courses.map((course, item) => (
                <CourseCard key={item} {...course} />
              ))}
            </div>
          </div>

          <div className="w-full max-w-7xl mx-auto p-4 flex justify-between items-center">
            <Button className="bg-orange-500 text-white py-3 font-normal hover:bg-orange-600 flex items-center justify-center gap-1">
              <span className="hidden md:flex ">Previous</span>
            </Button>
            <Button className="bg-orange-500 text-white py-3 font-normal hover:bg-orange-600 flex items-center justify-center gap-1">
              <span className="hidden md:flex ">Next</span>
            </Button>
          </div>
        </div>

        <Subscribe />
      </Sheet>
    </section>
  );
};

export default CoursesPage;
