import Event from "./EventSections/Event";
import Footer from "../components/Footer";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  

export default function Events() {
    return (
        <div>
            <div className="max-w-7xl mx-auto my-10">
                {/* Past Events Heading */}
                <h1 className="text-6xl font-extrabold pl-16 pt-8">Past Events</h1>
                <div>
                    <Event />
                </div>
            </div>

            <Pagination>
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
            </Pagination>

            <Footer/>

        </div>

    );
}