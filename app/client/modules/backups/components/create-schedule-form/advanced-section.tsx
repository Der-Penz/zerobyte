import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/client/components/ui/form";
import { Input } from "~/client/components/ui/input";
import { Textarea } from "~/client/components/ui/textarea";
import type { UseFormReturn } from "react-hook-form";
import type { InternalFormValues } from "./types";

type AdvancedSectionProps = {
	form: UseFormReturn<InternalFormValues>;
};

export const AdvancedSection = ({ form }: AdvancedSectionProps) => {
	return (
		<div className="space-y-4">
			<FormField
				control={form.control}
				name="maxRetries"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Maximum retries</FormLabel>
						<FormControl>
							<Input
								{...field}
								type="number"
								min={0}
								max={100}
								value={field.value ?? ""}
								onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
							/>
						</FormControl>
						<FormDescription>
							Maximum number of retry attempts if a backup fails (default: 5).
						</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="retryDelay"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Retry delay (hours)</FormLabel>
						<FormControl>
							<Input
								{...field}
								type="number"
								min={0.1}
								step={0.1}
								value={field.value ?? ""}
								onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
							/>
						</FormControl>
						<FormDescription>
							Delay in hours before retrying a failed backup (default: 1 hour).
						</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="customResticParamsText"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Custom restic parameters</FormLabel>
						<FormControl>
							<Textarea
								{...field}
								placeholder="--exclude-larger-than 500M&#10;--no-scan&#10;--read-concurrency 8"
								className="font-mono text-sm min-h-24"
							/>
						</FormControl>
						<FormDescription>
							Advanced: enter one restic flag per line (e.g.{" "}
							<code className="bg-muted px-1 rounded">--exclude-larger-than 500M</code>). Only the supported flag list is
							accepted.
						</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
};
