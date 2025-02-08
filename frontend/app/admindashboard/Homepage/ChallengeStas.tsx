import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, Users, ClipboardList, ChevronDown } from "lucide-react";

export default function StatsDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {/* Total Challenge Card */}
        <Card className="rounded-lg min-h-[180px]">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="flex gap-4 items-center">
                <div className="p-2 rounded-full bg-blue-100">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg md:text-xl text-muted-foreground font-medium">
                    Total Challenge
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl md:text-3xl font-semibold">29,405</p>
                    <span className="text-lg font-medium text-blue-500 bg-[#E7F6EC] px-2 rounded-lg">
                      ↑ 15%
                    </span>
                  </div>
                </div>
              </div>

              <Select defaultValue="this-week">
                <SelectTrigger className="w-full md:w-[130px] h-8 text-sm bg-gray-50 border-0 focus:ring-0">
                  <SelectValue />
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="last-week">Last Week</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Total Participants Card */}
        <Card className="rounded-lg min-h-[180px]">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="flex gap-4 items-center">
                <div className="p-2 rounded-full bg-blue-100">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg md:text-xl text-muted-foreground font-medium">
                    Total Participants
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl md:text-3xl font-semibold">29,405</p>
                    <span className="text-lg font-medium text-blue-500 bg-[#E7F6EC] px-2 rounded-lg">
                      ↑ 15%
                    </span>
                  </div>
                </div>
              </div>

              <Select defaultValue="this-week">
                <SelectTrigger className="w-full md:w-[130px] h-8 text-sm bg-gray-50 border-0 focus:ring-0">
                  <SelectValue />
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="last-week">Last Week</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <Card key={index} className="rounded-lg min-h-[180px]">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex gap-4 items-center">
                  <div className="p-2 rounded-full bg-blue-100">
                    <ClipboardList className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-lg md:text-xl text-muted-foreground font-medium">
                      {index === 0
                        ? "Completed Challenges"
                        : index === 1
                        ? "Open Challenges"
                        : "Ongoing Challenges"}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl md:text-3xl font-semibold">5,837</p>
                      <span className="text-lg font-medium text-blue-500 bg-[#E7F6EC] px-2 rounded-lg">
                        ↑ 15%
                      </span>
                    </div>
                  </div>
                </div>

                <Select defaultValue="last-30">
                  <SelectTrigger className="w-full md:w-[130px] h-8 text-sm bg-gray-50 border-0 focus:ring-0">
                    <SelectValue />
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last-30">Last 30 days</SelectItem>
                    <SelectItem value="last-60">Last 60 days</SelectItem>
                    <SelectItem value="last-90">Last 90 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

