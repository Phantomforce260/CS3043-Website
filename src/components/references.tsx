import { Box, Flex} from '@mantine/core'

export function References() {
    return(
        <Flex direction={"column"}>
            <h1 className="bubble yellow">References</h1>
            <Box w={"100%"} className="bubble yellow">
                <p className={"referenceText"}>[1]: Price, I., Sanchez-Gonzalez, Probabilistic weather forecasting with machine learning (Nature 637, 84–90, 12/04/2024), https://doi.org/10.1038/s41586-024-08252-9 (accessed 4/30/2025) </p>
                <p className={"referenceText"}>[2]: Rana Saad, Discovery, development, and current applications of DNA identity testing (National Library of Medicine, 4/2005), https://pmc.ncbi.nlm.nih.gov/articles/PMC1200713/ (accessed 4/30/2025) </p>
                <p className={"referenceText"}>[3]: Privacy Act of 1974 (Office of Privacy and Civil Liberties, n.d.) https://www.justice.gov/opcl/privacy-act-1974 (accessed 5/1/2025) </p>
                <p className={"referenceText"}>[4]: Michael J. Quinn, Ethics for the Information Age, Ninth Edition (Addison-Wesley, 2024). </p>
                <p className={"referenceText"}>[5]: Reverse Engineering (Cornell Law, 2021), https://www.law.cornell.edu/wex/reverse_engineering (accessed 5/3/2025) </p>
                <p className={"referenceText"}>[6]: Background Checks and Security Clearances for Federal Jobs (Go Government, n.d), https://gogovernment.org/application-process/background-checks-and-security-clearances/ (accessed 5/3/2025) </p>
                <p className={"referenceText"}>[7]: https://www.youtube.com/watch?v=xpKzQXgbNKI 16:10 </p>
                <p className={"referenceText"}>[8]: https://discussingfilm.net/2023/05/31/spider-man-across-the-spider-verse-directors-talk-raising-the-bar-and-creating-spider-punk-exclusive-interview/ </p>
            </Box>
        </Flex>
    );
}
