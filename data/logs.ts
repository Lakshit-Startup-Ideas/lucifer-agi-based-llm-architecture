export const dailyLogs = [
  {
    date: "2025-11-21",
    category: "Training",
    detail: `Achieved 98.7% accuracy on downstream tasks. Identified memory bottleneck in attention heads during 
    batch size 512 training. Implemented gradient checkpointing to reduce peak memory usage by 35%. 
    Next: Profile kernel-level operations for further optimization.`,
  },
  {
    date: "2025-11-20",
    category: "Architecture",
    detail: `Completed benchmarking of sparse attention vs dense attention. Sparse variant shows 40% compute 
    reduction with minimal accuracy loss. Team consensus: move to sparse by M3. Initiated RFC for 
    sparse attention integration into main pipeline.`,
  },
  {
    date: "2025-11-19",
    category: "DevLog",
    detail: `Debugged data loader bottleneck. I/O throughput was capped at 45GB/s due to network buffering. 
    Restructured data staging pipeline with local SSD caching. Now achieving 120GB/s sustained throughput. 
    Training time per epoch reduced from 4.2h to 2.1h.`,
  },
  {
    date: "2025-11-18",
    category: "Research",
    detail: `Reviewed attention mechanism paper from OpenAI. Their sliding window approach is novel but 
    memory-inefficient for long sequences. Proposed hybrid approach combining local + global attention. 
    Prototype implementation shows 2x throughput vs baseline. Proceeding with extended evaluation.`,
  },
  {
    date: "2025-11-17",
    category: "RLHF",
    detail: `Collected 50k preference pairs from human raters. Quality validation shows 94% inter-rater 
    agreement on safety and harmlessness dimensions. Launched reward model training with these pairs. 
    Preliminary results: reward model achieves 87% validation accuracy. Ready for next iteration.`,
  },
]
